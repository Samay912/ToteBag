/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf6f3',
          100: '#fae9e3',
          200: '#f5d1c2',
          300: '#eeb397',
          400: '#e5906b',
          500: '#E07A5F',
          600: '#c85d3e',
          700: '#a64832',
          800: '#8a3e2d',
          900: '#73362a',
        },
        secondary: {
          50: '#f0f9f6',
          100: '#dcf0e8',
          200: '#bbe1d3',
          300: '#8ccab6',
          400: '#5bad97',
          500: '#81B29A',
          600: '#2c7a67',
          700: '#246155',
          800: '#1f4e45',
          900: '#1c413a',
        },
        accent: {
          50: '#fefbf3',
          100: '#fdf4e1',
          200: '#fbe7c2',
          300: '#F2CC8F',
          400: '#edb866',
          500: '#e7a442',
          600: '#d18d37',
          700: '#ad6f2f',
          800: '#8c582c',
          900: '#724927',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};