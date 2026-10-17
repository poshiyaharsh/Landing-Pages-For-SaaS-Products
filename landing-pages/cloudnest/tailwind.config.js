/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nest: {
          bg: '#F7F9FC',
          surface: '#FFFFFF',
          subtle: '#F0F4F9',
          text: '#111827',
          secondary: '#64748B',
          muted: '#94A3B8',
          border: '#E2E8F0',
          'border-strong': '#CBD5E1',
          blue: '#3468F5',
          'blue-deep': '#2045B8',
          'blue-soft': '#EAF1FF',
          'blue-light': '#F4F7FF',
          cyan: '#35C5E8',
          'cyan-soft': '#E5F9FD',
          green: '#159B69',
          'green-soft': '#E7F7F0',
          amber: '#D97706',
          'amber-soft': '#FEF3C7',
          rose: '#EF4444',
          'rose-soft': '#FEE2E2',
          console: {
            bg: '#0B1220',
            surface: '#111C30',
            subtle: '#18243C',
            border: '#1E2C48',
            text: '#F1F5F9',
            muted: '#64748B',
          }
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px 0 rgba(17, 24, 39, 0.05), 0 1px 2px -1px rgba(17, 24, 39, 0.05)',
        'card-hover': '0 10px 25px -3px rgba(32, 69, 184, 0.08), 0 4px 6px -4px rgba(32, 69, 184, 0.04)',
        'modal': '0 20px 25px -5px rgba(11, 18, 32, 0.12), 0 8px 10px -6px rgba(11, 18, 32, 0.08)',
        'glow-blue': '0 0 20px -3px rgba(52, 104, 245, 0.25)',
        'glow-cyan': '0 0 20px -3px rgba(53, 197, 232, 0.25)',
      },
      borderRadius: {
        'nest': '8px',
        'nest-lg': '12px',
        'nest-xl': '16px',
      }
    },
  },
  plugins: [],
};
