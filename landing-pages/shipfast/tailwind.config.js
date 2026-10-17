/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dev: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          card: '#F1F5F9',
          border: '#E2E8F0',
          text: '#0F172A',
          muted: '#64748B',
          primary: '#2563EB',
          'primary-hover': '#1D4ED8',
          success: '#10B981',
          warning: '#F59E0B',
          terminal: '#0B0F19',
          'terminal-border': '#1E293B',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      }
    },
  },
  plugins: [],
}
