/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
    './src/pages/**/*.{jsx,tsx}',
    './src/components/**/*.{jsx,tsx}'
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
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#7D43FD",                  
          secondary: "#22C8B9",
          accent: "#b53920",
          neutral: "#141A24",
          "base-100": "#F0EDF3",
          info: "#1D5CE2",
          success: "#0CD549",
          warning: "#EFA837",
          error: "#F6090D",
        },
      },
    ],
  }
}
