/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        loginPattern: "url('/bg-login.jpg')",
      },
      fontFamily: {
        monserrat: ["monserrat"],
        youngSerif: "Young Serif",
      },
      colors: {
        primaryZzootec1: "#020202",
        primaryZzootec2: "#0F0F0F",
        secondaryBackColor1: "#000000",
        secondaryBackColor2: "#333333",
      },
    },
  },
  plugins: [],
};
