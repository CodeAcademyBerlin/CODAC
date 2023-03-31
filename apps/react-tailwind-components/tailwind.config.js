/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.teal[600],
        secondary: colors.purple[800],
        light: colors.gray[200],
        dark: colors.slate[800],
      },
    },
  },
  plugins: [],
}
