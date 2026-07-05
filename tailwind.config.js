/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        plum: {
          50: "#faf5f8",
          100: "#f3e4ee",
          200: "#e6c3dd",
          300: "#d38dc0",
          400: "#b85a9d",
          500: "#943a7d",
          600: "#742c64",
          700: "#5b2350",
          800: "#3a1533",
          900: "#1e0b1c",
        },
        gold: {
          50: "#fbf6e9",
          100: "#f5e7c1",
          200: "#ecd08c",
          300: "#dfb35a",
          400: "#c9a24b",
          500: "#b08a36",
          600: "#8c6c2a",
        },
        cream: {
          DEFAULT: "#fbf6f1",
          100: "#fbf6f1",
          200: "#f5ebe0",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans: ["Manrope", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
