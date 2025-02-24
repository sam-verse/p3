/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF0000', // Red
          orange: '#FF6B00',
          yellow: '#FFD700',
        },
      },
    },
  },
  plugins: [],
};