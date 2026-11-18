import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px", // Extra small - iPhone SE, small Android
        // sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px (Tailwind defaults)
      },
      colors: {
        cosmic: {
          950: "#170B35",
          900: "#1E1040",
          800: "#27104F",
          700: "#34126B",
        },
        violet: {
          DEFAULT: "#7139C9",
          light: "#8B5CF6",
        },
        lavender: "#C6A6FF",
        softpink: "#FFB9DE",
        moon: "#FFF9FF",
        star: "#FFD76A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      borderRadius: {
        "4xl": "32px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(198,166,255,0.35)",
        "glow-strong": "0 0 60px rgba(198,166,255,0.5)",
        card: "0 8px 32px rgba(23,11,53,0.4)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        "orbit-reverse": "orbit 25s linear infinite reverse",
        drift: "drift 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        orbit: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(6px,-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
