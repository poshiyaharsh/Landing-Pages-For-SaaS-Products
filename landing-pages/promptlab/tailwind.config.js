/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lab: {
          bg: '#0B0F19',
          surface: '#111827',
          card: '#151D2E',
          cardHover: '#1A2438',
          subtle: '#1F293D',
          border: '#233047',
          'border-strong': '#374763',
          text: '#F8FAFC',
          muted: '#94A3B8',
          secondary: '#64748B',
          cyan: '#06B6D4',
          'cyan-soft': 'rgba(6, 182, 212, 0.12)',
          teal: '#14B8A6',
          green: '#22C55E',
          'green-soft': 'rgba(34, 197, 94, 0.12)',
          violet: '#8B5CF6',
          'violet-soft': 'rgba(139, 92, 246, 0.12)',
          amber: '#F59E0B',
          rose: '#EF4444',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.25)',
        'glow-green': '0 0 25px -5px rgba(34, 197, 94, 0.25)',
        'glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.25)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        'lab': '8px',
        'lab-lg': '12px',
        'lab-xl': '16px',
      }
    },
  },
  plugins: [],
};
