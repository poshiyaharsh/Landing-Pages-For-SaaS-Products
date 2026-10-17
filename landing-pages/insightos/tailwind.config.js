/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        insight: {
          bg: '#0A0E17',
          surface: '#111827',
          card: '#161F30',
          border: '#1F293D',
          text: '#F3F4F6',
          muted: '#94A3B8',
          cyan: '#38BDF8',
          emerald: '#10B981',
          indigo: '#6366F1',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Roboto Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
