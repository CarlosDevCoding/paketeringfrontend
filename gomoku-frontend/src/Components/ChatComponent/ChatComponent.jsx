import React, { useEffect, useRef } from 'react';
import './ChatComponent.css';

export default function ChatComponent({ messages, onAddMessage }) {
  const chatEndRef = useRef(null);

  // auto-scroll till botten vid nytt meddelande
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <h3 className="chat-title">Chat</h3>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender}`}
          >
            <strong>
              {msg.sender === 'player1' ? 'Player 1:' : 'Player 2:'}
            </strong>{' '}
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <button className="chat-button" onClick={onAddMessage}>
        Skriv meddelande
      </button>
    </div>
  );
}
