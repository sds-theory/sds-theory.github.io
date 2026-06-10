/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#17202a',
        tealstone: '#2f6f73',
        copper: '#b66a35',
        paper: '#f6f2e9',
      },
    },
  },
  plugins: [],
};
