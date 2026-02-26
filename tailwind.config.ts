import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["var(--font-dosis)", "sans-serif"],
        solway: ["var(--font-solway)", "serif"]
      },
      colors: {
        melonRose: "#CE6166",
        melonCream: "#f6efd9",
        melonMustard: "#F2C245",
        melonBrown: "#86501f",
        melonInk: "#2f2b25"
      }
    }
  },
  plugins: []
};

export default config;
