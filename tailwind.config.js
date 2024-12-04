/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
      colors: {
        customGray: '#D9D9D9', 
      },
     
    },
  },
  plugins: [],
}

