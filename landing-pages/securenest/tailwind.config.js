/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secure: {
          bg: '#05080E',
          card: '#090E18',
          cardHover: '#0E1524',
          surface: '#121B2C',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.04)',
          borderHover: 'rgba(16, 185, 129, 0.35)',
          green: '#10B981',
          greenLight: '#34D399',
          greenGlow: 'rgba(16, 185, 129, 0.15)',
          cyan: '#06B6D4',
          cyanLight: '#22D3EE',
          cyanGlow: 'rgba(6, 182, 212, 0.15)',
          muted: '#94A3B8',
          subtle: '#64748B',
          alertCritical: '#EF4444',
          alertHigh: '#F97316',
          alertMedium: '#F59E0B',
          alertLow: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'radar': 'radarSweep 4s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
};
