/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.jsx"],
  theme: {
    colors:{
      "purple":"#541c83",
      "light-purple":"#eadae9",
      "dark-purple":"#3b135b",
      "black":"#1d1d1d"
    },
    
    /* After Dark Palette
      "purple":"#541c83",
      "light-purple":"#eadae9",
      "dark-purple":"#3b135b",
    */
    fontFamily:{
      sans:[ 'Outfit', 'sans-serif']
    },
    extend: {
    },
  },
  plugins: [],
}
