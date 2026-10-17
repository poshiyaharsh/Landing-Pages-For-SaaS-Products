/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        docu: {
          bg: '#F7F8FA',
          surface: '#FFFFFF',
          subtle: '#F1F3F5',
          text: '#17191D',
          secondary: '#666D78',
          muted: '#8B929D',
          border: '#E5E7EB',
          'border-strong': '#D1D5DB',
          accent: '#6256E8',
          'accent-hover': '#5245D8',
          'accent-soft': '#EFEDFF',
          'accent-light': '#F6F5FE',
          success: '#23865B',
          'success-soft': '#EAF5F0',
          warning: '#B7791F',
          'warning-soft': '#FEF7ED',
          danger: '#DC2626',
          'danger-soft': '#FEF2F2',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 6px 16px -2px rgba(23, 25, 29, 0.07), 0 2px 6px -2px rgba(23, 25, 29, 0.04)',
        'modal': '0 20px 25px -5px rgba(23, 25, 29, 0.1), 0 8px 10px -6px rgba(23, 25, 29, 0.06)',
        'dropdown': '0 10px 15px -3px rgba(23, 25, 29, 0.08), 0 4px 6px -4px rgba(23, 25, 29, 0.04)',
        'accent-glow': '0 0 0 3px rgba(98, 86, 232, 0.15)',
      },
      borderRadius: {
        'docu': '8px',
        'docu-lg': '12px',
        'docu-xl': '16px',
      }
    },
  },
  plugins: [],
};
