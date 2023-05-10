import "./preview.css";
import "../src/input.css";
import * as themes from "./themes";
import { withThemeByDataAttribute } from "@storybook/addon-styling";


export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
    attributeName: "class",
  }),
];

export const parameters = {
  layout: "centered",
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
  darkMode: {
    // Set the initial theme
    current: 'dark'
  },
  backgrounds: {
    default: "Theme",
    values: [
      {
        name: "Theme",
        value: "var(--storybook-background-color)",
      },
      {
        name: "Light",
        value: "var(--storybook-background-color-light)",
      },
      {
        name: "Dark",
        value: "var(--storybook-background-color-dark)",
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};

