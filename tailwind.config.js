/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-1": "#1b143f",
        "base-2": "#2d2752",
        "base-3": "#543ded",
        "gray-1": "#cbc2ff",
        "gray-2": "#b7cbfa",
        light: "#f2f9fd",
        primary: "#FF8F00",
      },
      fontFamily: {
        default: ["Hind Siliguri", "Hanken Grotesk"],
        HindSiliguri: ["Hind Siliguri"],
        HankenGrotesk: ["Hanken Grotesk"],
      },
      backgroundImage: {
        "card-gradient": "linear-gradient(90deg, #543ded 0%, #2d2752 100%)",
        "card-gradient-2": "linear-gradient(90deg, #2d2752 0%,  #543ded 100%)",
      },
    },
  },
  plugins: [],
};
