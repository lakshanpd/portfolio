/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px", // Define your custom xs breakpoint
        "screen-1": "1160px",
        "screen-2": "1240px",
      },
      colors: {
        darkBlue: "#131621",
        "light-blue": "#ADD8E6",
        cyan: "#00FFFF",
      },
      boxShadow: {
        glow: "0 0 10px rgba(0, 255, 0, 0.8)", // Customize the glow effect
      },
      animation: {
        "text-reveal":
          "text-reveal 2.0s cubic-bezier(0.77, 0, 0.175, 1) 0.5s forwards",
        "text-reveal-2": "text-reveal-2 2s ease-out forwards 2s", // Add delay to avoid overlap
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        "text-reveal-2": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        "3xl": "0 0px 30px -10px rgba(75, 75, 75, 0.3)",
      },
      scale: {
        110: "1.1", // 10% zoom
        125: "1.25", // 25% zoom
        150: "1.5", // 50% zoom
      },
    },
  },
  plugins: [],
};
