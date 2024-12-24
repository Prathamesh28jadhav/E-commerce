import React from 'react';
import Chatbot from '../components/Chatbot';

const ChatbotPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">Vegetable Info Chatbot</h1>
        <Chatbot />
      </div>
    </div>
  );
};

export default ChatbotPage;
