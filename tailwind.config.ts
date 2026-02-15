import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--color-brand)",
          dark: "var(--color-brand-dark)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
