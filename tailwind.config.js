/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#bcdbff',
          300: '#8ec2ff',
          400: '#589eff',
          500: '#2f7aff',
          600: '#1b5bf5',
          700: '#1344e1',
          800: '#1438b6',
          900: '#15328f',
        }
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)', boxShadow: '0 0 15px rgba(239, 68, 68, 0.8)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)', boxShadow: '0 0 25px rgba(239, 68, 68, 1)' }
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 1.5s infinite ease-in-out',
        'bounce-soft': 'bounce-soft 1s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}

