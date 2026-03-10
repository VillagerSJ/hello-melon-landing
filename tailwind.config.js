/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        dosis: ["var(--font-dosis)", "sans-serif"],
        solway: ["var(--font-solway)", "serif"]
      },
      colors: {
        melon: {
          base: "#EFE4CC",
          ribbon: "#F9EED9",
          rose: "#CE6166",
          "rose-soft": "#FAD4CB",
          "rose-footer": "#F08482",
          text: "#413A29",
          "text-soft": "#FFF3DD",
          cream: "#FFF7EF",
          neutral: "#F0F0F0",
          "neutral-soft": "#E8E8E8",
          "card-border": "#F7F3EC",
          olive: "#B3A758",
          "olive-hover": "#A79C4F",
          dot: "#B9B9B9",
          "dot-hover": "#9F9F9F",
          "dot-active": "#B5A64D",
          "dot-muted": "#CFCFCF",
          "dot-muted-hover": "#BDBDBD",
          accent: "#EA7C80",
          line: "#F9DDA2",
          "plaque-stroke": "#6E6330",
          "warm-sand": "#E8D9A7"
        },
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
