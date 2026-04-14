export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 32px 90px rgba(108, 252, 255, 0.14)",
      },
      colors: {
        bg: "#020506",
        surface: "rgba(10, 15, 28, 0.92)",
        panel: "rgba(12, 18, 32, 0.92)",
      },
    },
  },
  plugins: [],
};
