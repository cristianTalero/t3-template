/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{jsx,tsx}',
    './src/components/**/*.{jsx,tsx}',
    './src/layouts/**/*.{jsx,tsx}'
  ],
  theme: {
    extend: {},
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
