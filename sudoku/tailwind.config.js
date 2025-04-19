module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spaceship-move': 'spaceshipMove 6s linear infinite',
        'stars-twinkle': 'twinkleStars 1.5s infinite',
        'fade-in': 'fadeIn 2s ease-in-out forwards',
      },
      keyframes: {
        spaceshipMove: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-50px)' },
          '100%': { transform: 'translateY(0)' },
        },
        twinkleStars: {
          '0%': { opacity: 0.2 },
          '50%': { opacity: 0.7 },
          '100%': { opacity: 0.2 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
