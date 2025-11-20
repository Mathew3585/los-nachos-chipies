import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#FFD700',
          gold: '#FFC700',
          orange: '#FF8C00',
          'orange-dark': '#FF6B00',
          'orange-red': '#E85D00',
        },
        dark: {
          brown: '#5C2E0F',
          'brown-medium': '#8B4513',
        },
      },
      fontFamily: {
        minecraft: ['var(--font-minecraft)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
