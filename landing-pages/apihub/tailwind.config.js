/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#020617',
        card: '#0B0F19',
        cardBorder: '#1E293B',
        accentGreen: '#22C55E',
        accentCyan: '#06B6D4',
        accentViolet: '#6366F1',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"IBM Plex Sans"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
