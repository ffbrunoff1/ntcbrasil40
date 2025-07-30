/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ntc-blue': '#5EAADE',
        'ntc-dark': '#0A2540',
        'ntc-white': '#FFFFFF',
        'ntc-light-gray': '#F6F9FC',
        'ntc-text': '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        subtle: '0 4px 12px rgba(0, 0, 0, 0.05)',
        strong: '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
