import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Ensure this is imported

const Welcome = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulate loading process
      navigate('/level-map'); // Redirect to the LevelMap page after loading
    }, 5000); // Adjust this time for the loading screen (in ms)
  }, [navigate]); // Re-run effect if navigate changes

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
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
