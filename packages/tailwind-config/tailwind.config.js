const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-20': {
      transform: 'rotateX(20deg)',
    },
    '.rotate-x-40': {
      transform: 'rotateX(40deg)',
    },
    '.rotate-x-60': {
      transform: 'rotateX(60deg)',
    },
    '.rotate-x-80': {
      transform: 'rotateX(80deg)',
    },
  })
})
const perspective = plugin(function ({ addUtilities }) {
  addUtilities({
    '.perspective-o-50-50': {
      ['perspective-origin']: '50% 50%',
    },
    '.perspective-180': {
      perspective: '180px',
    }
  })
})



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
        "vc-border-gradient": `radial-gradient(at left top, ${theme("colors.gray.500")}, 50px, ${theme("colors.secondary.800")}, 50%)`,
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
        planeMove: {
          from: {
            ["background-position"]: '0px 0px, 0px 0px'
          },
          to: {
            ["background-position"]: '0px 100px, 0px 0px'
          }
        }
        ,
        dashdraw: {
          from: {
            ["stroke-dashoffset"]: '2338',
            ["stroke-dasharray"]: '2338'
          },
          to: {
            ["stroke-dashoffset"]: '0',
            ["stroke-dasharray"]: '2338'
          }
        },
        neonLight: {
          "0%": {
            ["text-shadow"]: '1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,   1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2), 1px 30px 300px #38bcc1'
          },
          "90%": {
            ["text-shadow"]: '1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,  1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2), 1px 30px 400px #38bcc1'
          },
          "95%": {
            ["text-shadow"]: '1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,  1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),  1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2)'
          },
          "100%": {
            ["text-shadow"]: '1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2), 1px 30px 500px #38bcc1'
          }
        }
      }),
      // not working
      // animation: {
      // 'planeMove': '6s linear infinite',
      // 'dashdraw': '200s linear infinite reverse',
      // 'fadeToTransparent': '1s linear infinite'
      // },
    },
  },

  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), rotateX, perspective],
};
