/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        terminal: {
          dark: '#080C14',
          surface: '#0E1626',
          card: '#141E33',
          border: 'rgba(255, 255, 255, 0.08)',
          amber: '#F59E0B',
          green: '#10B981',
          red: '#EF4444',
          cyan: '#06B6D4',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Menlo', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
