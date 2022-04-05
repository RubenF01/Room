module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 63%)",
        veryDarkGray: "hsl(0, 0%, 27%)",
      },
      fontFamily: {
        spartan: ["Spartan"],
      },
    },
  },
  plugins: [],
};
