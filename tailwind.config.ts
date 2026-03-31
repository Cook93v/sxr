import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0B",
        surface: "#101114",
        card: "#16181D",
        line: "#252934",
        text: "#F5F7FA",
        muted: "#A6AEBC",
        brand: {
          DEFAULT: "#6D5EF7",
          soft: "#8B7DF8"
        },
        success: "#22C55E",
        warning: "#F59E0B"
      },
      boxShadow: {
        glow: "0 20px 80px rgba(109, 94, 247, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
