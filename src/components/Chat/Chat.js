import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Linkify from 'react-linkify';
import { types as sdkTypes } from '../../util/sdkLoader';
import css from './Chat.module.css';
import { assistantContent, systemContent } from './ChatContent'
import { bubbleIcon, sendIcon } from './icons'

const sharetribeSdk = require('sharetribe-flex-sdk');

const { UUID, LatLng, LatLngBounds } = sdkTypes;

const sdk = sharetribeSdk.createInstance({
  clientId: process.env.REACT_APP_SHARETRIBE_SDK_CLIENT_ID,
  baseUrl: process.env.REACT_APP_SHARETRIBE_SDK_BASE_URL || 'https://flex-api.sharetribe.com',
});

const Chat = () => {
  const [message, setMessage] = useState('');
  const initialMessage = [
    {
      user: 'Bot',
      text: 'Hej! Jag är Medlas chattsupport. Jag kan berätta hur Medla fungerar och hjälpa dig om du har frågor eller behöver hjälp.',
      id: 'initialMessage'
    }
  ];
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem('chatMessages')) || initialMessage);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      const messageContainer = messageContainerRef.current;
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, [messages, isChatVisible]);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message) return;

    setMessages((prevMessages) => [...prevMessages, { user: 'Du', text: message }]);

    setMessage('');
    setIsWaitingForResponse(true);

    try {
      const listingQuery = await getListingQuery(message);
    
      let queryResults;
    
      if(listingQuery !== null && typeof listingQuery !== 'string') {
        queryResults = await runSharetribeQuery(listingQuery);
      }
      const response = await callChatGPT(queryResults, message);
    
      const assistantResponse = queryResponse !== null && listingQuery !== null ? queryResponse : response;
      setMessages((prevMessages) => [...prevMessages, { user: 'Bot', text: assistantResponse }]);
    } catch (error) {
      setMessages((prevMessages) => [...prevMessages, { user: 'Bot', text: 'Oops, something went wrong. Please try again later.' }]);
    } finally {
      setIsWaitingForResponse(false);
    }    
  };

  const getListingQuery = async (message) => {
    const categories = 'bemanning, betong, bygg, driftochunderhall, el, fordon, itochtelecom, kostlogi, maskinreparation, media, projektering, servicetjanster, skogsmaskintjanster, sprangning, svets, transport, tillverkning, utbildning, ovrigt';
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are a JSON translator. You should translate user's requests about services, products or companies to a category and a set of lng lat coordinates. You only speak JSON.`,
            },
            {
              role: 'system',
              content: `These are the available categories: ${categories}. If the user's message corresponds to a request about a service, product or company, answer in the following JSON format: {"pub_category": "category", "origin": ["lng", "lat"]}. If the user's message does not correspond to such a request, answer with 'null'.`,
            },
            {
              role: 'user',
              content: message,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        },
      );      
  
      const assistantMessage = response.data.choices && response.data.choices[0].message;
      if (assistantMessage) {
        const cleanedContent = assistantMessage.content.trim().replace(/\.$/, "");
    
        try {
          const result = JSON.parse(cleanedContent);
    
          if (result === null) {
            return null;
          }
          
          result.origin = [parseFloat(result.origin[0]), parseFloat(result.origin[1])];
          return result;
        } catch (error) {
          console.error('Error parsing JSON from assistant:', error);
        }
      }
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
    }
  
    return null;
};
  
async function runSharetribeQuery(listingQuery) {
  try {
    const response = await sdk.listings.query({
      pub_category: listingQuery.pub_category,
      origin: new LatLng(...listingQuery.origin),
      pub_listingCategory: 'company',
      per_page: 5,
    });

    if (response.data && response.data.data) {
      return response.data.data.map(listing => {
        return {
          uuid: listing.id.uuid,
          title: listing.attributes.title,
          offer1: listing.attributes.publicData.offer1,
          offer2: listing.attributes.publicData.offer2,
          offer3: listing.attributes.publicData.offer3,
          offer4: listing.attributes.publicData.offer4,
          offer5: listing.attributes.publicData.offer5
        };
      });
    }
  } catch (error) {
    console.error('Error running Sharetribe query:', error);
  }

  return null;
}

  const callChatGPT = async (queryResults, message) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `Du är Medlas chattsupport. Din uppgift är att hjälpa användare att navigera genom tjänsten och att hitta lokala företag baserat på deras specifika behov. Du bör endast föreslå företag som nämns i användarens meddelande och som erbjuder tjänster relevanta för användarens förfrågan. När du rekommenderar ett företag, inkludera en länk till företagets Medla-profil, formaterad som följande: "<a href='${process.env.REACT_APP_CANONICAL_ROOT_URL}/c/{listingId}'>Företagets namn</a>". Inga andra länkar är tillåtna.`,
            },            
            ...messages.map((msg) => ({
              role: msg.user === 'Du' ? 'user' : 'assistant',
              content: msg.text,
            })),
            {
              role: 'user',
              content: queryResults == undefined ? message : `${message}\n\nFöreslå upp till 3 företag från listan om de är relevanta för frågan, om inte så be om mer information:\n\n${JSON.stringify(queryResults)}`,
            },
          ],
          max_tokens: 400,
          temperature: 0.2,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        },
      );
  
      const assistantMessage = response.data.choices && response.data.choices[0].message;
      if (assistantMessage) {
        return assistantMessage.content.trim();
      }
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
    }

    return null;
  };  

  return (
    <>
      {isChatVisible && (
        <div className={css.chatContainer}>
          <div className={css.chatHeader}>
            Medla Supportchatt
          </div>
          <button
            onClick={() => setIsChatVisible(false)}
            className={css.closeChatButton}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 240 240" fill="none">
              <path d="M30 30 L210 210 M30 210 L210 30" stroke="white" stroke-width="25"/>
            </svg>
          </button>
          <div className={css.messageContainer} ref={messageContainerRef}>
          {messages.map((msg, index) => (
                <div id={`msg-${msg.id}`} className={msg.user === 'Du' ? css.youContainer : css.botContainer} key={index}>
                  <div className={msg.user === 'Du' ? css.you : css.bot}>
                    <p>
                      <strong>{msg.user}:</strong>{' '}
                      <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }}></div>
                    </p>
                  </div>
                </div>
              ))}
            {isWaitingForResponse && (
              <div className={css.botContainer}>
                <div className={css.bot}>
                  <div className={css.loadingDots}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <form onSubmit={sendMessage}>
            <div className={css.formContainer}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Prova att fråga 'Hur anmäler jag mig?' eller 'Vilka tjänster erbjuder ni?'"
                className={css.input}
              />
              <button className={css.sendButton}>
                {sendIcon}
              </button>
            </div>
          </form>
        </div>
      )}
      {!isChatVisible && (
        <button onClick={() => setIsChatVisible(true)} className={css.openChatButton}>
          {bubbleIcon}
        </button>
      )}
    </>
  );
};

export default Chat;

