/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ACD3A8",
        secondary: "#3E3F5B",
        accent: "#8AB2A6",
      },
      fontFamily: {
        orbitron: "Orbitron",
      },
    },
  },
  plugins: [],
};
