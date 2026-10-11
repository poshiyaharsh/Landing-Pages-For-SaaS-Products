/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: '#F8F6F0',
          'soft-white': '#FFFEFC',
          ink: '#191919',
          charcoal: '#33312E',
          taupe: '#B8ADA0',
          'taupe-light': '#D6CEC4',
          champagne: '#E8DFD2',
          'champagne-light': '#F3ECE1',
          olive: '#777B65',
          'olive-dark': '#555846',
          border: '#E5DED3',
          'border-dark': '#2E2C29',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(25, 25, 25, 0.07)',
        'luxury-hover': '0 30px 60px -20px rgba(25, 25, 25, 0.12)',
        'editorial': '0 4px 20px -2px rgba(25, 25, 25, 0.04)',
        'subtle': '0 1px 3px 0 rgba(25, 25, 25, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
};
