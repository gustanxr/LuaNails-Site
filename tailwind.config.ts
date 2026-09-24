import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102A43",
        berry: "#2563EB",
        lime: "#A5E8FF",
        cream: "#F5FAFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        sticker: "5px 5px 0 #102A43",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-5deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" },
        },
      },
      animation: { float: "float 5s ease-in-out infinite" },
    },
  },
  plugins: [],
};

export default config;
