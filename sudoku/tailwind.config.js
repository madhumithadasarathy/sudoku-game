/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        space: '#0b0c1d',
        neonPurple: '#a855f7',
        neonBlue: '#3b82f6',
        cosmicPink: '#ec4899',
        galaxy: '#1e293b',
      },
      fontFamily: {
        space: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(168, 85, 247, 0.6)',
        glow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)',
        deep: '0 0 60px rgba(0, 0, 0, 0.9)',
      },
      backgroundImage: {
        stars: "url('/assets/stars-bg.jpg')",
        nebula: "url('/assets/nebula.jpg')",
        galaxy: "url('/assets/galaxy-loop.gif')",
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 1, textShadow: '0 0 10px #fff, 0 0 20px #a855f7' },
          '50%': { opacity: 0.6, textShadow: '0 0 20px #a855f7, 0 0 40px #a855f7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
