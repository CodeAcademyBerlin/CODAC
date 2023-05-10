import { create } from "@storybook/theming/create";
const colors = require("tailwindcss/colors");

const codacTheme = create({
  base: "light",
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
  brandTitle: "CODAC UI",
  brandUrl: "https://codac-ui.vercel.app/",
  // brandImage: require("../src/assets/codac-logo.png"),
  brandTarget: "_self",

  // Colors
  colorPrimary: "#FF8A80",
  colorSecondary: "#00897B",
});

export default codacTheme;
