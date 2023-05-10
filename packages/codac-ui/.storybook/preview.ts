/** @type { import('@storybook/react').Preview } */
/** @type { import('@storybook/addon-styling') } */
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
    attributeName: "class",
  }),
];
export const parameters = {
  layout: "centered",
};
