import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleChatbotClick = () => {
    navigate('/chatbot');
  };

  return (
    <div className="font-sans bg-green-50 text-gray-800 min-h-screen relative">
      {/* Header Section */}
      <header className="relative w-full h-[60vh] bg-green-600 text-white flex flex-col justify-center items-center text-center">
        {/* Top Right Buttons */}
        <div className="absolute top-4 right-6 flex gap-4">
          <button
            className="px-4 py-2 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-100 transition duration-300"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className="px-4 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition duration-300"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
          Welcome to FreshHarvest
        </h1>
        <p className="text-base md:text-xl max-w-3xl animate-fadeIn">
          Your one-stop solution for fresh vegetables and AI-powered customer assistance.
        </p>
      </header>

      {/* Key Features Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Chatbot */}
            <div
              className="p-6 bg-green-100 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer"
              onClick={handleChatbotClick}
            >
              <h3 className="text-xl font-semibold mb-4 text-green-700">AI Chatbot Assistance</h3>
              <p className="text-gray-600">
                Our chatbot is here to help you 24/7 with orders and inquiries.
              </p>
            </div>
            {/* Customer Reviews */}
            <div
  className="p-6 bg-gray-50 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
  onClick={() => navigate('/reviews')}
>
  <h3 className="text-xl font-semibold mb-4 text-green-700">Customer Reviews</h3>
  <p className="text-gray-600">
    Check out what our customers love about Fresh Veggies.
  </p>
</div>

            {/* Fresh Vegetables */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Fresh & Organic</h3>
              <p className="text-gray-600">
                Farm-fresh, organic veggies delivered to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect with Us */}
      <section className="py-12 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-6">Connect with Us</h2>
          <div className="flex justify-center gap-8 text-4xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 transition-transform duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 transition-transform duration-300 hover:scale-110"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-transform duration-300 hover:scale-110"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Fresh Veggies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
