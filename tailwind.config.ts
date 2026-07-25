import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#170D2E", // deep plum-indigo base
        plum: "#2B1852",
        blush: "#F3B6C8", // soft pink accent
        gold: "#E7B860", // warm gold accent
        lavender: "#C9A9EC",
        cream: "#FBF1E6", // warm text color
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        script: ["var(--font-caveat)", "cursive"],
        body: ["var(--font-quicksand)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        twinkle: "twinkle 2.4s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
