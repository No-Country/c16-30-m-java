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
        "genoa" : "#128260",
        "codgray" : "#1E1E1E",
        "red-orange" : "#FF4538",
        "dove-gray" : "#696969",
      },
      backgroundColor: {
        footer: "var(--footer-background)",
        primary: "#128260",
      },
      fontFamily: {
        main: ["var(--main-font)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
