import React, { useState } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    // Fetch response from the API
    const response = await fetch('https://payload.vextapp.com/hook/M081NVUT95/catch/channel-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Apikey': 'Api-Key xxx-xxxxxxxxxxx-xxx',
      },
      body: JSON.stringify({ payload: input }),
    });

    const data = await response.json();
    const botMessage = { sender: 'bot', text: data.text || 'No response' };

    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setInput('');
  };

  return (
        <div className="flex flex-col h-full bg-opacity-90 font-retro">
          <div className="flex-grow overflow-y-auto p-4">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`my-2 p-2 rounded-lg max-w-xl mx-auto ${
                        message.sender === 'user'
                            ? 'bg-red-500 bg-opacity-90 text-white self-end'
                            : 'bg-gray-200 bg-opacity-90 text-black self-start'
                    }`}
                >
                  {message.text}
                </div>
            ))}
          </div>

          <div className="p-4 flex items-center bg-transparent mx-auto max-w-2xl w-full">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-90 focus:outline-none focus:border-red-500"
            />
            <button
                onClick={handleSendMessage}
                className="bg-red-600 bg-opacity-90 text-white px-4 py-2 ml-2 rounded-lg hover:bg-opacity-90"
            >
              SEND
            </button>
          </div>
        </div>
  );
};

export default ChatWindow;
