import type { Config } from "tailwindcss"

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
        // Jumbo Safaris Brand Colors
        forest: "#033417",
        "forest-dark": "#022510",
        orange: "#FD6802",
        cream: "#FFF7EC",
        ink: "#1A1A1A",
        muted: "#5C5C5C",
        "border-soft": "#E8E2D5",
        // shadcn defaults
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        // Hero H1
        "hero-desktop": ["64px", { lineHeight: "1.05", fontWeight: "800" }],
        "hero-mobile": ["48px", { lineHeight: "1.05", fontWeight: "800" }],
        // Page H1
        "h1-desktop": ["48px", { lineHeight: "1.1", fontWeight: "700" }],
        "h1-mobile": ["36px", { lineHeight: "1.1", fontWeight: "700" }],
        // H2
        "h2-desktop": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "h2-mobile": ["28px", { lineHeight: "1.2", fontWeight: "700" }],
        // H3
        "h3-desktop": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "h3-mobile": ["22px", { lineHeight: "1.3", fontWeight: "600" }],
        // Body
        "body-desktop": ["17px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-mobile": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        // Body large/lead
        "lead-desktop": ["20px", { lineHeight: "1.55", fontWeight: "400" }],
        "lead-mobile": ["18px", { lineHeight: "1.55", fontWeight: "400" }],
        // Caption/meta
        caption: ["13px", { lineHeight: "1.4", fontWeight: "500" }],
        // Eyebrow label
        eyebrow: ["12px", { lineHeight: "1.4", fontWeight: "600", letterSpacing: "0.08em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        content: "1280px",
        prose: "65ch",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
