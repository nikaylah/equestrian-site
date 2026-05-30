import type { Config } from "tailwindcss";

const colorVar = (name: string) => `rgb(from var(${name}) r g b / <alpha-value>)`;

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem", /* 9px */
        md: ".375rem", /* 6px */
        sm: ".1875rem", /* 3px */
      },
      colors: {
        // Custom design system colors
        navy: {
          DEFAULT: "#2C1A0E",
          light: "#4A3020",
          dark: "#2C1A0E",
        },
        sage: {
          DEFAULT: "#5C7A5C",
          light: "#8BAF8B",
          dark: "#5C7A5C",
        },
        cream: {
          DEFAULT: "#FAF5EE",
          dark: "#EFE6D8",
        },
        terracotta: {
          DEFAULT: "#C05A35",
          dark: "#8F3A1E",
          foreground: "#FAF5EE",
        },
        greige: "#EFE6D8",
        linen: "#E2D4C0",
        hazel: "#8C6645",
        leather: "#4A3020",
        // Flat / base colors (regular buttons)
        background: colorVar("--background"),
        foreground: colorVar("--foreground"),
        border: colorVar("--border"),
        input: colorVar("--input"),
        card: {
          DEFAULT: colorVar("--card"),
          foreground: colorVar("--card-foreground"),
          border: colorVar("--card-border"),
        },
        popover: {
          DEFAULT: colorVar("--popover"),
          foreground: colorVar("--popover-foreground"),
          border: colorVar("--popover-border"),
        },
        primary: {
          DEFAULT: colorVar("--primary"),
          foreground: colorVar("--primary-foreground"),
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: colorVar("--secondary"),
          foreground: colorVar("--secondary-foreground"),
          border: "var(--secondary-border)",
        },
        muted: {
          DEFAULT: colorVar("--muted"),
          foreground: colorVar("--muted-foreground"),
          border: "var(--muted-border)",
        },
        accent: {
          DEFAULT: colorVar("--accent"),
          foreground: colorVar("--accent-foreground"),
          border: "var(--accent-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          border: "var(--destructive-border)",
        },
        ring: colorVar("--ring"),
        chart: {
          "1": colorVar("--chart-1"),
          "2": colorVar("--chart-2"),
          "3": colorVar("--chart-3"),
          "4": colorVar("--chart-4"),
          "5": colorVar("--chart-5"),
        },
        sidebar: {
          ring: colorVar("--sidebar-ring"),
          DEFAULT: colorVar("--sidebar"),
          foreground: colorVar("--sidebar-foreground"),
          border: colorVar("--sidebar-border"),
        },
        "sidebar-primary": {
          DEFAULT: colorVar("--sidebar-primary"),
          foreground: colorVar("--sidebar-primary-foreground"),
          border: "var(--sidebar-primary-border)",
        },
        "sidebar-accent": {
          DEFAULT: colorVar("--sidebar-accent"),
          foreground: colorVar("--sidebar-accent-foreground"),
          border: "var(--sidebar-accent-border)"
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
      },
      fontFamily: {
        sans: ["Lato", "var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
