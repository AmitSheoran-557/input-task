/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      backgroundImage: {
        "hero-bg": "url('./assets/images/png/hero-bg.png')",
      },
      colors: {
        "blue": '#1BABFE',
        'gradient-bg': 'linear-gradient(149.67deg, #815CC8 29.44%, #1BABFE 81.54%',
      },
      dropShadow: {
        'light': '0px 8px 30px 0px #1BABFE',
      }
    },
  },
  plugins: [],
};
