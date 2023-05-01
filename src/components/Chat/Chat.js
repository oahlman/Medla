import React, { useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import axios from 'axios';
import css from './Chat.module.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  console.log('key', apiKey)

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message) {
      setMessages((prevMessages) => [...prevMessages, { user: 'you', text: message }]);
      setMessage('');
  
      // Call ChatGPT API
      const response = await callChatGPT(message);
  
      // Add the response to the messages list
      if (response) {
        setMessages((prevMessages) => [...prevMessages, { user: 'bot', text: response }]);
      }
    }
  };  

  const callChatGPT = async (message) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          ...messages.map((msg) => ({
            role: msg.user === 'you' ? 'user' : 'assistant',
            content: msg.text,
          })),
          {
            role: 'user',
            content: message,
          },
        ],
        max_tokens: 50,
        temperature: 1,
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
    <div>
      <ScrollToBottom className={css.messageContainer}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.user === 'you' ? css.you : css.bot}>
            <p><strong>{msg.user}:</strong> {msg.text}</p>
          </div>
        ))}
      </ScrollToBottom>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
          className={css.input}
        />
        <button type="submit" className={css.button}>Send</button>
      </form>
    </div>
  );
};

export default Chat;
