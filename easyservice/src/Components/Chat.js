import React, { useState } from 'react';
import './Chat.css'; // Fichier CSS pour les styles du chat
const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const handleInputChange = (event) => {
        setCurrentMessage(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (currentMessage !== '') {
            setMessages([...messages, currentMessage]);
            setCurrentMessage('');
        }
    };
    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className="chat-message">
                        {message}
                    </div>
                ))}
            </div>
            <form className="chat-form" onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={currentMessage}
                    onChange={handleInputChange}
                    placeholder="Saisissez votre message..."
                />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};
export default Chat;