import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { paper: "#faf7f2", ink: "#0c1212", brand: "#0b3b2a", accent: "#c2410c", muted: "#4b5563" },
    fontFamily: { serif: ["var(--font-serif)", "Georgia", "serif"], sans: ["var(--font-sans)", "Arial", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
