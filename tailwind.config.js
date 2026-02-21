/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        'crimson-text': ['"Crimson Text"', 'serif'],
        noto: ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        egg: {
          pink: '#D4A5A5',
          rose: '#9E7676',
          brown: '#615555',
          cream: '#FDF8F5',
        },
        aws: {
          dark: '#232F3E',
          darker: '#1A2332',
          orange: '#FF9900',
          blue: '#146EB4',
          card: '#2d3e50',
        },
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
