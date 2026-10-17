/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        audit: {
          bg: '#F6F8FB',
          surface: '#FFFFFF',
          secondary: '#EEF2F7',
          border: '#DFE6EF',
          'border-strong': '#CBD5E1',
          text: '#142033',
          muted: '#64748B',
          navy: '#142C4E',
          'navy-dark': '#0D1D35',
          'navy-light': '#1E3C68',
          blue: '#3569D4',
          'blue-hover': '#2853B8',
          'blue-soft': '#EAF1FF',
          teal: '#159B91',
          'teal-soft': '#E4F6F4',
          success: '#17865C',
          'success-soft': '#E6F6F0',
          warning: '#C17A18',
          'warning-soft': '#FDF5E8',
          critical: '#C74747',
          'critical-soft': '#FBEAEA',
          dark: {
            bg: '#101927',
            surface: '#172236',
            card: '#1E2C44',
            border: '#283955',
            text: '#F1F5F9',
            muted: '#8CA0BA'
          }
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(20, 32, 51, 0.05)',
        'card': '0 2px 4px 0 rgba(20, 32, 51, 0.04), 0 1px 2px -1px rgba(20, 32, 51, 0.04)',
        'card-hover': '0 10px 25px -4px rgba(20, 44, 78, 0.08), 0 4px 6px -2px rgba(20, 44, 78, 0.03)',
        'modal': '0 20px 30px -6px rgba(16, 25, 39, 0.16), 0 10px 15px -4px rgba(16, 25, 39, 0.10)',
        'enterprise': '0 24px 48px -12px rgba(20, 44, 78, 0.14)',
      },
      borderRadius: {
        'audit': '6px',
        'audit-md': '8px',
        'audit-lg': '12px',
        'audit-xl': '16px',
      }
    },
  },
  plugins: [],
};
