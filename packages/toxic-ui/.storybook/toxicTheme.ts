import { create } from '@storybook/theming/create'
const colors = require('tailwindcss/colors')

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
  colorPrimary: colors.blue[500],
  colorSecondary: colors.gray[500],

  // UI
  appBg: colors.slate[900],
  appContentBg: colors.gray[800],
  appBorderColor: colors.gray[600],
  appBorderRadius: 4,

  // Text colors
  textColor: colors.gray[100],
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: colors.green[300],
  barSelectedColor: colors.blue[500],
  barBg: colors.gray[800],

  // Form colors
  inputBg: colors.gray[700],
  inputBorder: colors.gray[500],
  inputTextColor: colors.gray[100],
  inputBorderRadius: 2,
})

const toxicTheme = create({
  ...lightTheme,
  // Customize your default theme here
})

export { toxicTheme, lightTheme, darkTheme }
