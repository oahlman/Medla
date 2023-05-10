import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Linkify from 'react-linkify';
import css from './Chat.module.css';
import chatContent from './ChatContent'

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
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
      setMessages((prevMessages) => [...prevMessages, { user: 'Bot', text: response }]);
    } catch (error) {
      setMessages((prevMessages) => [...prevMessages, { user: 'Bot', text: 'Oops, something went wrong. Please try again later.' }]);
    } finally {
      setIsWaitingForResponse(false);
    }
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
              content: 'Du är Medlas hjälpsamma kundsupportassistent som talar svenska och är kunnig om Medlas tjänster och funktioner. Dina svar är alltid väldigt korta och koncisa (max 2 meningar), istället för långa svar så hänvisar du till länkar på Medla som medla.app/s, medla.app/signup och medla.app/vanliga-fragor, och när du inte har svar hänvisar du till supportmailen på support@medla.app. Dela aldrig länkar som inte slutar med "medla.app"',
            },
            {
              role: 'assistant',
              content: chatContent,
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
              <div key={index} className={msg.user === 'Du' ? css.you : css.bot}>
                <p>
                  <strong>{msg.user}:</strong>{' '}
                  <Linkify componentDecorator={medlaLinkDecorator}>{msg.text}</Linkify>
                </p>
              </div>
            ))}
            {isWaitingForResponse && (
              <div className={css.bot}>
                <div className={css.loadingDots}>
                  <div></div>
                  <div></div>
                  <div></div>
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
                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.563 14.605l9.356-5.402c1-.577 1-2.02 0-2.598L4.563 1.203a1.5 1.5 0 00-2.25 1.3v10.803a1.5 1.5 0 002.25 1.3zM6.51 8.387L2.313 9.512V6.297L6.51 7.42c.494.133.494.834 0 .966z"></path>
                </svg>
              </button>
            </div>
          </form>
          </div>
      )}
      {!isChatVisible && (
        <button onClick={() => setIsChatVisible(true)} className={css.openChatButton}>
        <svg id="woot-widget-bubble-icon" width="24" height="24" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M240.808 240.808H122.123C56.6994 240.808 3.45695 187.562 3.45695 122.122C3.45695 56.7031 56.6994 3.45697 122.124 3.45697C187.566 3.45697 240.808 56.7031 240.808 122.122V240.808Z" fill="#FFFFFF">
          </path>
        </svg>
        </button>
      )}
    </>
  );
};

export default Chat;