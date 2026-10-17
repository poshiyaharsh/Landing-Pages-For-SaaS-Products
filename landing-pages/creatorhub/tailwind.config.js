/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        creator: {
          pink: '#EC4899',
          violet: '#8B5CF6',
          fuchsia: '#D946EF',
          rose: '#F43F5E',
          purple: '#A855F7',
          dark: '#0B0A10',
          surface: '#151221',
          card: '#1F1A32',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
