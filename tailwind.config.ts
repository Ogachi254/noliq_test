/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8E7',
        dark: '#2D2D2D',
        accent: '#FFD700',
      },
    },
  },
  plugins: [],
};