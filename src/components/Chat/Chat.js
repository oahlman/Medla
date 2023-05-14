import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Linkify from 'react-linkify';
import css from './Chat.module.css';
import { assistantContent, systemContent } from './ChatContent'
import { bubbleIcon, sendIcon } from './icons'

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
              content: systemContent,
            },
            {
              role: 'assistant',
              content: assistantContent,
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
                  <Linkify componentDecorator={medlaLinkDecorator}>{msg.text}</Linkify>
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

