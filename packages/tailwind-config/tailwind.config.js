const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["src/**/*.{ts,tsx}", "../../packages/codac-ui/src/**/*.{ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  // darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
        'CODAC': ['var(----codac-font)'],
      },
      colors: {
        gray: colors.zinc,
        "gray-1000": "rgb(17,17,19)",
        "gray-1100": "rgb(10,10,11)",
        primary: "#00897B",
        secondary: "#FF0080",
        codac: {
          pink: "#FF0080",
          blue: "#0070F3",
          cyan: "#50E3C2",
          orange: "#F5A623",
          violet: "#7928CA",
        },
      },
      backgroundImage: ({ theme }) => ({
        "vc-border-gradient": `radial-gradient(at left top, ${theme(
          "colors.gray.500"
        )}, 50px, ${theme("colors.gray.800")} 50%)`,
      }),
      keyframes: ({ theme }) => ({
        rerender: {
          "0%": {
            ["border-color"]: theme("colors.codac.pink"),
          },
          "40%": {
            ["border-color"]: theme("colors.codac.pink"),
          },
        },
        highlight: {
          "0%": {
            background: theme("colors.codac.pink"),
            color: theme("colors.white"),
          },
          "40%": {
            background: theme("colors.codac.pink"),
            color: theme("colors.white"),
          },
        },
        loading: {
          "0%": {
            opacity: ".2",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)",
          },
          to: {
            opacity: ".2",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: "1",
          },
          "40%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
