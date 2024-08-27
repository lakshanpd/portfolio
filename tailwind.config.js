/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#131621",
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
    },
  },
  plugins: [],
};
