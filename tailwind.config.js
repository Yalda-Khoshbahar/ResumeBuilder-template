/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        375: "375px",
        // => @media (min-width: 375px) { ... }
        425: "425px",
        // => @media (min-width: 425px) { ... }
        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        primary: "#FF5C00",
        orange: {
          100: "#ff7f35",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
    plugins: [],
  },
};
