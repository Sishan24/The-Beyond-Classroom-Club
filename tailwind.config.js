/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#172B46',
          yellow: '#FFCF56',
          coral: '#FF796C',
          mint: '#77CDB5',
          lilac: '#A995E8',
          cream: '#FFF9ED',
        },
      },
      fontFamily: {
        fredoka: ['Fredoka', 'cursive', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-4deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        waveBar: {
          '0%, 100%': { height: '15%' },
          '50%': { height: '95%' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        float: 'floatSlow 5s ease-in-out infinite',
        'float-reverse': 'floatReverse 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.25s ease-out forwards',
      },
    },
  },
  plugins: [],
};
