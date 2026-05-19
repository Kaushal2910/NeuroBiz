/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#0B1120",
        card: "rgba(255,255,255,0.08)",
        border: "rgba(255,255,255,0.1)",

        primary: "#06B6D4",
        secondary: "#8B5CF6",

        muted: "#9CA3AF",
      },

      backdropBlur: {
        xs: "2px",
      },

      boxShadow: {
        glow: "0 0 25px rgba(6,182,212,0.25)",
      },

      backgroundImage: {
        "main-gradient":
          "linear-gradient(to right, #06B6D4, #8B5CF6)",
      },
    },
  },

  plugins: [],
};