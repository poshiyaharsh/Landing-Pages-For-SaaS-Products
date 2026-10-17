/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sync: {
          bg: '#FAF9FC',
          surface: '#FFFFFF',
          subtle: '#F4F2F8',
          text: '#0F172A',
          secondary: '#64748B',
          muted: '#94A3B8',
          border: '#E4E2EB',
          'border-strong': '#CBD5E1',
          indigo: '#4F46E5',
          'indigo-hover': '#4338CA',
          'indigo-soft': '#EEF2FF',
          purple: '#7C3AED',
          'purple-soft': '#F5F3FF',
          emerald: '#059669',
          'emerald-soft': '#ECFDF5',
          amber: '#D97706',
          'amber-soft': '#FEF3C7',
          rose: '#E11D48',
          'rose-soft': '#FFE4E6',
          slate: {
            900: '#0F172A',
            800: '#1E293B',
            700: '#334155',
          }
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.04)',
        'card': '0 2px 4px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 10px 25px -4px rgba(79, 70, 229, 0.08), 0 4px 6px -2px rgba(79, 70, 229, 0.03)',
        'workspace': '0 20px 40px -15px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(228, 226, 235, 0.8)',
      },
      borderRadius: {
        'sync': '8px',
        'sync-lg': '12px',
        'sync-xl': '16px',
        'sync-2xl': '24px',
      }
    },
  },
  plugins: [],
};
