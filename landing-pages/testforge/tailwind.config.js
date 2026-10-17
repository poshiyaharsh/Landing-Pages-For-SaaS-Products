/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forge: {
          dark: '#0A0F1D',
          surface: '#10172A',
          card: '#182238',
          pass: '#22C55E',
          fail: '#EF4444',
          skip: '#F59E0B',
          cyan: '#06B6D4',
          blue: '#3B82F6',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
