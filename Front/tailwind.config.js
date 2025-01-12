/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out",
        "fade-in-down": "fadeInDown 1.5s ease-in-out",
        "fade-in-up": "fadeInUp 1.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      colors: {
        primary: "#FFEA00", // Bright yellow for text or buttons
        secondary: "#212121", // Dark gray for backgrounds
      },
      boxShadow: {
        "custom-glow": "0 0 15px rgba(255, 234, 0, 0.6)", // Glowing yellow effect
      },
    },
  },
  plugins: [],
};
