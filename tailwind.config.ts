import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-playfair)"],
      },
      colors: {
        brand: {
          dark: "#0a0a0a",
          charcoal: "#1a1a1a",
          gold: "#b8962e",
          "gold-light": "#d4af5a",
          cream: "#f5f0e8",
          "off-white": "#fafaf8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
