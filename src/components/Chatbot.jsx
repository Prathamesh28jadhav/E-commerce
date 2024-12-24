import React, { useState } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false); // Added loading state

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;

        // Add user's message to the chat
        const userMessage = { sender: 'user', text: userInput };
        setMessages((prev) => [...prev, userMessage]);
        setUserInput(''); // Clear input field
        setLoading(true); // Start loading

        try {
            // Send request to the Express server, which will forward it to the Gemini API
            const response = await fetch('http://localhost:5000/api/gemini-query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: userInput,
                }),
            });

            if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
             if(data && data.response){
                 const botMessage = { sender: 'bot', text: data.response };
                setMessages((prev) => [...prev, botMessage]);
             } else {
                 setMessages((prev) => [
                    ...prev,
                    { sender: 'bot', text: 'I am sorry, I could not process that response.' },
                ]);
             }


        } catch (error) {
            console.error('Error from API: ', error);
            // In case of error, send a fallback message
            setMessages((prev) => [
                ...prev,
                { sender: 'bot', text: 'Sorry, something went wrong!' },
            ]);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div>
            <div className="h-96 overflow-y-auto border rounded-lg p-4 bg-gray-100">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`p-2 my-2 rounded-lg ${message.sender === 'user'
                            ? 'bg-blue-500 text-white self-end'
                            : 'bg-gray-200 text-black self-start'
                            }`}
                    >
                        {message.text}
                    </div>
                ))}
                  {loading && (
                      <div className="p-2 my-2 rounded-lg bg-gray-200 text-black self-start">
                        Loading...
                      </div>
                  )}
            </div>
            <div className="mt-4 flex">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask about a vegetable..."
                    className="flex-grow px-4 py-2 border rounded-lg"
                    disabled={loading}
                />
                <button
                    onClick={handleSendMessage}
                    className="ml-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </div>
        </div>
    );
};

export default Chatbot;