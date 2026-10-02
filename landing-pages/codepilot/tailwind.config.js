/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        codepilot: {
          bg: '#090A0C',
          panel: '#0D0F12',
          surface: '#12151B',
          card: '#151921',
          hover: '#1B202B',
          border: '#1E242F',
          'border-subtle': '#181D26',
          'border-highlight': '#2A3444',
          muted: '#8B949E',
          dim: '#626D7C',
          text: '#F0F6FC',
          white: '#FFFFFF',
        },
        brand: {
          green: '#00F59B',
          'green-dim': '#059669',
          'green-glow': '#00F59B26',
          cyan: '#00E5FF',
          'cyan-dim': '#0891B2',
          'cyan-glow': '#00E5FF26',
          purple: '#A78BFA',
          amber: '#F59E0B',
          red: '#EF4444',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-green': '0 0 24px -4px rgba(0, 245, 155, 0.25)',
        'glow-cyan': '0 0 24px -4px rgba(0, 229, 255, 0.25)',
        'terminal': '0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'card-subtle': '0 10px 30px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'dot-matrix': 'radial-gradient(circle, rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
        'hero-radial': 'radial-gradient(60% 60% at 50% 10%, rgba(0, 245, 155, 0.08) 0%, rgba(0, 229, 255, 0.03) 50%, transparent 100%)',
      }
    },
  },
  plugins: [],
}
