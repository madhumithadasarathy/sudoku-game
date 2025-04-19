import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Welcome = () => {
  const navigate = useNavigate();

  // Redirect to level map after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/level-map');
    }, 6000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          background: {
            color: '#000000',
          },
          particles: {
            number: {
              value: 100,
              density: { enable: true, value_area: 800 },
            },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
              value: 0.5,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 2,
              random: true,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: 'none',
              out_mode: 'out',
            },
          },
        }}
      />

      {/* Warp Gate / Portal Animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full border-4 border-purple-500 bg-gradient-to-br from-purple-800 to-indigo-900 blur-xl opacity-70"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Astronaut or Ship Icon */}
      <motion.div
        className="absolute top-1/2 left-1/2 z-20"
        initial={{ scale: 0 }}
        animate={{ scale: [0.5, 1.2, 1] }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <img src="/assets/spaceship.svg" alt="Spaceship" className="w-32 drop-shadow-2xl" />
      </motion.div>

      {/* Glowing Welcome Text */}
      <motion.div
        className="absolute bottom-20 left-1/2 text-center z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1.5 }}
        style={{ transform: 'translateX(-50%)' }}
      >
        <h1 className="text-5xl font-bold text-white drop-shadow-lg neon-glow">
          🚀 Launching Mission...
        </h1>
        <p className="mt-4 text-xl text-slate-300">Preparing your intergalactic Sudoku adventure</p>
      </motion.div>
    </div>
  );
};

export default Welcome;
