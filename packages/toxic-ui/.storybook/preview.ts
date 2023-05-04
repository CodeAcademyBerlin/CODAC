// .storybook/preview.js
import { withThemeByDataAttribute } from '@storybook/addon-styling'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { create } from '@storybook/theming'

const colors = require('tailwindcss/colors')
import '../src/index.css'
const lightTheme = create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'ToXiC-UI',
  brandUrl: 'http://localhost:6006/',
  brandImage: require('../src/assets/logo.png'),
  brandTarget: '_self',

  // Colors
  colorPrimary: colors.blue[500],
  colorSecondary: colors.gray[700],

  // UI
  appBg: colors.gray[100],
  appContentBg: colors.gray[50],
  appBorderColor: colors.gray[300],
  appBorderRadius: 4,

  // Text colors
  textColor: colors.gray[800],
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: colors.green[700],
  barSelectedColor: colors.blue[500],
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: colors.gray[300],
  inputTextColor: colors.gray[800],
  inputBorderRadius: 2,
})

const darkTheme = create({
  base: 'dark',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'ToXiC-UI',
  brandUrl: 'http://localhost:6006/',
  brandImage: require('../src/assets/logo.png'),
  brandTarget: '_self',

  // Colors
  colorPrimary: colors.red[500],
  colorSecondary: colors.emerald[700],

  // UI
  appBg: colors.neutral[800],
  appContentBg: colors.neutral[800],
  appBorderColor: colors.gray[700],
  appBorderRadius: 4,

  // Text colors
  textColor: colors.gray[200],
  textInverseColor: colors.red[400],

  // Toolbar default and active colors
  barTextColor: colors.neutral[400],
  barSelectedColor: colors.green[400],
  barBg: colors.neutral[800],

  // Form colors
  inputBg: colors.gray[700],
  inputBorder: colors.gray[500],
  inputTextColor: colors.gray[100],
  inputBorderRadius: 2,
})

export const parameters = {
  darkMode: {
    classTarget: 'html',
    // Override the default dark theme
    dark: darkTheme,
    // Override the default light theme
    light: lightTheme,
  },
  stylePreview: true,
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
]
