import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#1A6FC4",
        "blue-accent": "#2E8DE8",
        "navy-deep": "#0A1628",
        "navy-mid": "#0D1B2E",
        "navy-card": "#0F1E35",
        "off-white": "#F5F7FA",
        "text-dark": "#0D0D0D",
        footer: "#060E1A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        condensed: ["var(--font-condensed)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        industrial: "4px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
