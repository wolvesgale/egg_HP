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
          pink:   '#D4A5A5',
          rose:   '#9E7676',
          brown:  '#615555',
          cream:  '#FDF8F5',
          light:  '#FFF5F5',
          blush:  '#F5E6E6',
          muted:  '#E8D5D5',
          dark:   '#3D2E2E',
        },
        aws: {
          dark:   '#232F3E',
          darker: '#1A2332',
          orange: '#FF9900',
          blue:   '#146EB4',
          card:   '#2d3e50',
        },
        wagashi: {
          warm:   '#F5EDE0',
          matcha: '#8B9E6E',
          sakura: '#F0B8C0',
          adzuki: '#8B3A3A',
        },
      },
      backgroundImage: {
        'egg-grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float':           'float 5s ease-in-out infinite',
        'fade-up':         'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in':         'fadeIn 0.6s ease-out both',
        'slide-right':     'slideRight 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'draw-line':       'drawLine 1.2s ease-out both',
        'pulse-slow':      'pulse 4s ease-in-out infinite',
        'spin-slow':       'spin 20s linear infinite',
        'shimmer':         'shimmer 2s linear infinite',
        'marquee':         'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        'loading-bar':     'loadingBar 1.8s cubic-bezier(0.4,0,0.2,1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':      { transform: 'translateY(-12px) rotate(1deg)' },
          '66%':      { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        drawLine: {
          '0%':   { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        loadingBar: {
          '0%':   { width: '0%', opacity: '1' },
          '80%':  { width: '100%', opacity: '1' },
          '100%': { width: '100%', opacity: '0' },
        },
      },
      boxShadow: {
        'egg-sm':  '0 2px 12px rgba(158,118,118,0.08)',
        'egg-md':  '0 8px 32px rgba(158,118,118,0.12)',
        'egg-lg':  '0 20px 60px rgba(158,118,118,0.16)',
        'egg-xl':  '0 32px 80px rgba(158,118,118,0.20)',
        'glow':    '0 0 40px rgba(212,165,165,0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
