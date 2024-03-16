/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        product: '0px 4px 15px rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        inter: ['Inter'],
      }
    },
  },
  plugins: [],
}

