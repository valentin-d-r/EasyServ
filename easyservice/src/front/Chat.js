import React, { useState } from 'react';
import '../style/Chat.css';

const Chat = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [message, setMessage] = useState('');
    const [chatLog, setChatLog] = useState([]);

    const handlePersonSelect = (person) => {
        setSelectedPerson(person);
    };

    const handleSendMessage = () => {
        if (!selectedPerson || message.trim() === '') {
            return;
        }

        const newMessage = {
            sender: selectedPerson,
            content: message.trim(),
            timestamp: new Date().toLocaleTimeString(),
        };

        setChatLog((prevChatLog) => [...prevChatLog, newMessage]);
        setMessage('');
    };

    return (
        <div className="chat-container">
            <div className="chat-persons">
                <button onClick={() => handlePersonSelect('Person 1')}>Person 1</button>
                <button onClick={() => handlePersonSelect('Person 2')}>Person 2</button>
                <button onClick={() => handlePersonSelect('Person 3')}>Person 3</button>
            </div>
            <div className="chat-log">
                {chatLog.map((message, index) => (
                    <div className="chat-message" key={index}>
                        <span className="chat-sender">{message.sender}</span>
                        <span className="chat-timestamp">{message.timestamp}</span>
                        <p>{message.content}</p>
                    </div>
                ))}
            </div>
            {selectedPerson && (
                <div className="chat-input">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={`Message ${selectedPerson}`}
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            )}
        </div>
    );
};
export default Chat;
