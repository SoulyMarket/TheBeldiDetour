/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2D5016',
        'forest-deep': '#1D3810',
        'warm-white': '#F5F0E8',
        'rich-brown': '#6B3A2A',
        'gold': '#C9A84C',
        'gold-light': '#E2C46E',
        'clay': '#C4784B',
        'dark': '#1A120B',
        'sage': '#8BA888',
        'sand': '#E8D5B7',
        'muted': '#9A8C7E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
