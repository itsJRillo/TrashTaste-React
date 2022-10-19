/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.jsx"],
  theme: {
    colors:{
      "purple":"#541c83",
      "light-purple":"#eadae9",
      "dark-purple":"#3b135b",
      "black":"#1d1d1d",
      "white":"#fff",
      "purpleAF":"#442c94",
      "light-purpleAF":"#8743e9",
      "dark-purpleAF":"#251536",
      "dark":"#100d14"
    },
    fontFamily:{
      sans:[ 'Outfit', 'sans-serif']
    },
    extend: {
    },
  },
  plugins: [],
}
