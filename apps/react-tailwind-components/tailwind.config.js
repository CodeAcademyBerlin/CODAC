/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: colors.teal[600],
        secondary: colors.orange[700],
        light: colors.gray[200],
        dark: colors.neutral[500],
        test: colors.red[400],
        test2: colors.green[300],
        test3: colors.cyan[200],
      },
    },
  },
  plugins: [],
}
