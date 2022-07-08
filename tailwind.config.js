/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "sol-tan-1": "#fdf6e3",
      "sol-tan-2": "#eee8d5",
      "sol-blue-1": "#268bd2",
      "sol-cyan-1": "#2aa198",
      "sol-yellow-1": "#b58900",
      "sol-grey-4": "#586e75",
      "sol-grey-3": "#657b83",
      "sol-grey-2": "#839496",
      "sol-grey-1": "#93a1a1",
      "sol-black-1": "#073642",
      "sol-black-2": "#002b36",
      "white-1": "#ffffff",
      "sol-red-1": "#c9211e",
      "sol-magenta-1": "#d33682",
    },
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({});
    },
  ],
  darkMode: "class",
};
