/** @type { import('@storybook/react').Preview } */
import "../src/input.css";
import { withThemeByDataAttribute } from "@storybook/addon-styling";

/* snipped for brevity */

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
    attributeName: "data-mode",
  }),
];
export const parameters = {
  layout: "centered",
};
