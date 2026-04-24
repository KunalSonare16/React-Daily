/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  safelist: ["font-title"], 

  theme: {
    extend: {
      fontFamily: {
        title: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
}