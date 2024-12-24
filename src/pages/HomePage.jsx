import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/landingPage'); // Navigate to LandingPage
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Top Section: Video Background with Welcome Message */}
      <div className="relative w-full h-1/2 bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute top-0 left-0 w-full h-full object-cover"
          playsInline
        >
          <source 
            src="https://assets.mixkit.co/videos/10420/10420-720.mp4"
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay and Welcome Message */}
        <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center animate-pulse">
            Welcome to FreshHarvest
          </h1>
          <button 
            onClick={handleExplore} 
            className="mt-4 px-6 py-3 bg-gray-900 text-white text-lg rounded hover:bg-gray-700 transition duration-300"
          >
            Explore
          </button>
        </div>
      </div>

      {/* Bottom Section: Info */}
      <div className="relative flex flex-col justify-center items-center w-full h-1/2 p-6 bg-gradient-to-b from-gray-900 to-gray-700 text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-green-400 animate-fade-up">
            About FreshHarvest
          </h2>
          <p 
            className="text-lg md:text-xl leading-relaxed px-6 md:px-12 animate-fade animate-delay-300 
                       transition duration-500 ease-in-out hover:scale-105"
          >
            At <span className="text-green-500 font-semibold">FreshHarvest</span>, we bring 
            <span className="text-green-400 font-bold"> farm-fresh vegetables </span>
            directly to your doorstep. <br />
            <span className="text-gray-300 font-medium">Experience the goodness of nature</span> 
            with high-quality, locally sourced produce.  
            Enjoy a <span className="text-blue-400 font-semibold">seamless shopping experience</span> 
            and make healthy eating a part of your daily life.  
            <span className="text-green-300 italic font-bold">
              Freshness you can see, quality you can trust
            </span> — because you deserve the best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
