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
  const [messages, setMessages] = useState([
    {
      user: 'Bot',
      text: 'Hej! Jag är Medlas chattsupport. Jag kan berätta hur Medla fungerar och hjälpa dig om du har frågor eller behöver hjälp.'
    }
  ]);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const medlaLinkDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );

  const messageContainerRef = useRef(null);

  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message) return;

    setMessages((prevMessages) => [...prevMessages, { user: 'Du', text: message }]);

    setMessage('');
    setIsWaitingForResponse(true);

    try {
      const response = await callChatGPT(message);
      const listingQuery = await getListingQuery(message);
    
      let queryResults, queryResponse;
    
      if(listingQuery !== null) {
        queryResults = await runSharetribeQuery(listingQuery);
        queryResponse = await getChatResponse(queryResults, message);
      }
    
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
              content: `You are a JSON translator. You should translate user's requests about services, products or companies to a category and a set of lng lat coordinates.`,
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
  
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('Error running Sharetribe query:', error);
    }
  
    return null;
  }  
  
  const getChatResponse = async (queryResults, message) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `Du är Medlas chattsupport. Du hjälper användare att använda tjänsten och att hitta lokala företag som kan hjälpa dem med deras behov. Föreslå endast företag som ingår i användarens meddelande, och bara om deras erbjudanden är relevanta för kundens fråga. När du rekommenderar ett företag, inkludera alltid en länk till företagets Medla-profil, formaterad som följande: "<a href='${process.env.REACT_APP_CANONICAL_ROOT_URL}/c/{listingId}'>Företagets namn</a>", inga andra länkar är tillåtna.`
            },
            {
              role: 'user',
              content: `${message}\n\nFöreslå upp till 3 företag från listan om de är relevanta för frågan, om inte så be om mer information:\n\n${JSON.stringify(queryResults.data)}`,
            },
          ],
          temperature: 0.2,
          max_tokens: 400,
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
        const content = assistantMessage.content.trim();

        // Break up the message into lines and indent each line for better readability
        const lines = content.split('\n');
        const indentedLines = lines.map(line => `    ${line}`);

        // Add a title and a newline for spacing, then join the indented lines back together
        const formattedMessage = `Företagssuggestioner:\n\n${indentedLines.join('\n')}`;

        return formattedMessage;
      }
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
    }
  
    return null;
  };

  const callChatGPT = async (message) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'Du är Medlas chattsupport som hjälper användare att hitta lokala varor, tjänster och leverantörer.',
            },
            {
              role: 'assistant',
              content: 'Hej! Jag är Medlas chattsupport. Jag kan berätta hur Medla fungerar och hjälpa dig om du har frågor eller behöver hjälp.',
            },
            ...messages.map((msg) => ({
              role: msg.user === 'Du' ? 'user' : 'assistant',
              content: msg.text,
            })),
            {
              role: 'user',
              content: message,
            },
          ],
          max_tokens: 150,
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
            <div className={msg.user === 'Du' ? css.youContainer : css.botContainer} key={index}>
              <div className={msg.user === 'Du' ? css.you : css.bot}>
                <p>
                  <strong>{msg.user}:</strong>{' '}
                  <div dangerouslySetInnerHTML={{ __html: msg.text }}></div>
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

