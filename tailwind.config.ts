import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // UsDrop Ai Brand Colors - DARK BLUE THEME (Glossy & Sharp)
        brand: {
          blue: "#1E40AF",        // Dark navy blue (primary)
          darkBlue: "#1E3A8A",    // Deeper navy
          navy: "#172554",        // Deep navy (almost black)
          accent: "#3B82F6",      // Bright blue accent
          cyan: "#06B6D4",        // Cyan accent
          black: "#000000",       // Pure black
          white: "#FFFFFF",       // Pure white
        },
        // Extended dark blue palette
        blue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",         // Bright blue
          600: "#2563EB",         // Medium blue
          700: "#1D4ED8",         // Dark blue
          800: "#1E40AF",         // Primary dark blue
          900: "#1E3A8A",         // Deeper navy
          950: "#172554",         // Deep navy
        },
      },
      borderRadius: {
        xl: "0.375rem",           // 6px - Extra Sharp
        lg: "0.25rem",            // 4px - Extra Sharp
        md: "0.125rem",           // 2px - Extra Sharp
        sm: "0.0625rem",          // 1px - Ultra Sharp
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

