const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{jsx,tsx}',
    './src/components/**/*.{jsx,tsx}',
    './src/layouts/**/*.{jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue[500],
        secondary: colors.emerald[500],
        success: colors.green[500],
        warning: colors.yellow[500],
        error: colors.red[500],
        info: colors.cyan[500]
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Cousine', 'monospace']
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
  important: '#__next'
}
