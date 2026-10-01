/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          950: '#050508',
          900: '#08080C',
          850: '#0D0D14',
          800: '#12121D',
          750: '#171724',
          700: '#1F1F30',
          border: '#27273C',
          text: '#F5F5F7',
          muted: '#8E8EA8',
          subtle: '#52526B'
        },
        neon: {
          violet: '#8B5CF6',
          violetDark: '#7C3AED',
          cyan: '#06B6D4',
          cyanGlow: '#22D3EE',
          pink: '#F43F5E',
          pinkGlow: '#EC4899',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        'grain-radial': 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.15), transparent 70%), radial-gradient(ellipse at bottom, rgba(6, 182, 212, 0.12), transparent 70%)',
        'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'studio-glow': 'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.18) 0%, rgba(6, 182, 212, 0.08) 45%, transparent 75%)'
      },
      boxShadow: {
        'neon-violet': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'neon-pink': '0 0 25px -5px rgba(244, 63, 94, 0.4)',
        'studio-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7)'
      }
    },
  },
  plugins: [],
}
