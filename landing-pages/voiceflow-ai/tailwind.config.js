/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vf: {
          bg: '#080B12',
          'bg-secondary': '#0E1320',
          surface: '#131A28',
          'surface-elevated': '#192235',
          border: 'rgba(82, 232, 255, 0.12)',
          'border-subtle': 'rgba(255, 255, 255, 0.07)',
          text: '#F5F7FB',
          'text-muted': '#A1ADBF',
          cyan: '#52E8FF',
          'cyan-dark': '#29BBD4',
          violet: '#8875FF',
          'violet-dark': '#6955E6',
          blue: '#6C9EFF',
          green: '#63E6A5',
          amber: '#F5A623',
          rose: '#FF5E7E',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -4px rgba(82, 232, 255, 0.35)',
        'cyan-glow-lg': '0 0 50px -8px rgba(82, 232, 255, 0.45)',
        'violet-glow': '0 0 30px -5px rgba(136, 117, 255, 0.35)',
        'dual-glow': '0 0 40px -6px rgba(82, 232, 255, 0.25), 0 0 40px -6px rgba(136, 117, 255, 0.25)',
        'surface': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'orb-pulse': 'orbPulse 4s ease-in-out infinite',
        'orb-rotate': 'orbRotate 20s linear infinite',
        'wave-bar': 'waveBar 1.2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        orbPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.85' },
          '50%': { transform: 'scale(1.06)', opacity: '1' },
        },
        orbRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        waveBar: {
          '0%': { height: '15%' },
          '100%': { height: '95%' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
