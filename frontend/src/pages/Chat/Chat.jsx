import { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      const newMessage = {
        text: inputText.trim(),
        sender: 'user', // Assuming user sends the message
        timestamp: new Date().toISOString()
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <div>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <p>{message.text}</p>
            <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
