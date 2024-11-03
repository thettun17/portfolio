import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      sm: [
        "13px",
        {
          fontWeight: "200",
        },
      ],
      md: [
        "1.5rem",
        {
          fontWeight: 400,
          letterSpacing: "0.1em",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "1.875rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "0.1em",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customWhite: "#f4f4f4",
        facebookColor: "#3B5998",
        linkedInColor: "#0E76A8",
        primaryColor: "#323b4c",
        secondaryColor: "#445067",
        iconColor: "#b0971b",
      },
    },
  },
  plugins: [],
};
export default config;
