import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Welcome = ({ onStartJourney }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulate loading process
    }, 5000); // Adjust this value as per your loading time
  }, []);

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/space-background.jpg')" }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Starry Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-stars bg-cover opacity-30"></div>

      {/* Central Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        {/* Spaceship Animation with Framer Motion */}
        <motion.div
          className="spaceship w-20 h-20 mx-auto bg-gray-800 rounded-full relative"
          animate={{ translateY: ["0%", "-50px", "0%"] }} // spaceship movement
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full animate-pulse spaceship-fire"></div>
        </motion.div>

        {/* Loading Text */}
        {loading ? (
          <motion.div
            className="text-3xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >
            <p>Preparing Your Space Journey...</p>
          </motion.div>
        ) : (
          <motion.div
            className="text-3xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >
            <p>Ready for Takeoff!</p>
            <button
              onClick={onStartJourney}
              className="mt-6 px-8 py-4 bg-blue-600 text-white text-2xl rounded-lg hover:bg-blue-700 transition-all transform duration-200"
            >
              Start Journey
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
