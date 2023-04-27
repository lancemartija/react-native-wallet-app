/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./navigator/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      primary: "#EF835D",
      secondary: "#2C365A",
      tertiary: "#85C6D8",
      gray: "#D1D5DB",
      graylight: "#F3F4F6",
      graydark: "#4B5563",
      accent: "#FBCD77",
    },
    fontFamily: { lato: ["Lato", "sans-serif"] },
  },
  plugins: [],
};
