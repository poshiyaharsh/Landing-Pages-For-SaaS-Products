/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        launch: {
          dark: '#070A11',
          card: '#0D1322',
          surface: '#11182B',
          border: '#1F293D',
          borderLight: '#2D3A54',
          violet: '#8B5CF6',
          violetDark: '#7C3AED',
          blue: '#3B82F6',
          blueDark: '#2563EB',
          cyan: '#06B6D4',
          pink: '#EC4899',
          magenta: '#F43F5E',
          orange: '#F97316',
          orangeLight: '#FB923C',
          amber: '#F59E0B',
          mint: '#10B981',
          muted: '#94A3B8',
          textMuted: '#64748B',
          lightBg: '#F8FAFC',
          lightCard: '#FFFFFF',
          lightBorder: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-medium': 'floatMed 5s ease-in-out infinite',
        'float-fast': 'floatFast 3.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        floatMed: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-1.5deg)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 45%, #EC4899 80%, #F97316 100%)',
        'fire-gradient': 'linear-gradient(135deg, #EC4899 0%, #F97316 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
        'violet-blue': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
      }
    },
  },
  plugins: [],
};
