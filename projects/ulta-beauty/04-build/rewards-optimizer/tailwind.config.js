/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ulta: {
          pink: '#E91E8C',
          'pink-light': '#FF6B9D',
          black: '#000000',
          gold: '#C89B3C',
        },
        direct: {
          green: '#2E7D32',
          'green-light': '#E8F5E9',
        },
        marketplace: {
          amber: '#F9A825',
          'amber-light': '#FFF8E1',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
