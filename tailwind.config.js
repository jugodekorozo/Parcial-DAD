/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        navy: "rgb(var(--color-primary) / <alpha-value>)",
        haze: "rgb(var(--color-neutral) / <alpha-value>)",
        warm: "rgb(var(--color-secondary) / <alpha-value>)",
        lime: "rgb(var(--color-tertiary) / <alpha-value>)",
        midnight: "rgb(var(--color-black) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        tint: "rgb(var(--color-tint) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        panel: "0 16px 50px rgb(var(--color-black) / 0.12)"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgb(var(--color-black) / 0.12) 1px, transparent 0)",
        glow: "linear-gradient(135deg, rgb(var(--color-secondary) / 0.20), rgb(var(--color-primary) / 0.16))",
        hero: "linear-gradient(135deg, rgb(var(--color-black) / 0.98), rgb(var(--color-primary) / 0.86))",
        accent: "linear-gradient(135deg, rgb(var(--color-secondary) / 0.14), rgb(var(--color-tertiary) / 0.10), rgb(var(--color-primary) / 0.08))",
        accentDark: "linear-gradient(135deg, rgb(var(--color-secondary) / 0.14), rgb(var(--color-primary) / 0.10), rgb(var(--color-neutral) / 0.05))",
        shine: "linear-gradient(120deg, transparent 0%, rgb(var(--color-neutral) / 0.16) 55%, transparent 100%)"
      }
    }
  },
  plugins: []
};
