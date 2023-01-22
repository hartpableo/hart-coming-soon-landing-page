/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    fontFamily: {
      "primaryFont": "'Ubuntu', sans-serif"
    },
    extend: {
      colors: {
        "baseColor": "#0d1117",
        "primaryColor": "#c9d1d9"
      }
    },
  },
  plugins: [],
}
