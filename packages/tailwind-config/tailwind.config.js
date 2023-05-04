/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "../../packages/toxic-ui/components/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: colors.teal[600],
        secondary: colors.orange[700],
        light: colors.gray[200],
        dark: colors.gray[800],
        test: colors.red[400],
        test2: colors.green[300],
        test3: colors.red[200],
      },
    },
  },
  plugins: [],
}
