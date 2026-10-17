/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        talent: {
          violet: '#7C3AED',
          indigo: '#6366F1',
          teal: '#0D9488',
          cyan: '#06B6D4',
          slate: '#0F172A',
          card: '#1E293B',
          surface: '#121A2D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
