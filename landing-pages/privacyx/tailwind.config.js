/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        privacy: {
          dark: '#0B0F17',
          surface: '#111827',
          card: '#1A2234',
          teal: '#0D9488',
          sage: '#14B8A6',
          cyan: '#06B6D4',
          slate: '#334155',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
