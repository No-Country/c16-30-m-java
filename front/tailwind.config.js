/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        normal: "var(--text-normal)",
      },
      colors: {
        main: "var(--text-main-color)",
      },
      backgroundColor: {
        footer: "var(--footer-background)",
      },
      fontFamily: {
        main: ["var(--main-font)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
