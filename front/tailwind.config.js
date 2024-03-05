/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        normal: "var(--text-normal)",
      },
      colors: {
        black: "#000",
        white: "#fffefe",
        genoa: "#128260",
        primary: "#128260",
        codgray: "#1E1E1E",
        grey: "#f0f0f0",
        "red-orange": "#FF4538",
        "dove-gray": "#696969",
        concrete: "#F3F3F3",
      },
      backgroundColor: {
        footer: "var(--footer-background)",
        primary: "#128260",
      },
      fontFamily: {
        main: ["var(--main-font)", "sans-serif"],
      },
      boxShadow: {
        'txl' : '1px 1px 25px 0px rgba(0, 0, 0, 0.20);'
      }
    },
  },
  plugins: [],
};
