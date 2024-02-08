/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
      },
      colors: {
        dark: "rgb(11, 13, 23)",
        "light-gray": "rgb(40, 39, 49)",
        "light-blue": "rgb(208, 214, 249)",
        white: "rgb(255, 255, 255)",
      },
      fontFamily: {
        barlow: "'Barlow Condensed', sans-serif",
        Bellefair: "'Bellefair', serif",
      },
    },
  },
  plugins: [],
};
