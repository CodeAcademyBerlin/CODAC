import { create } from "@storybook/theming/create";


const commonOptions = {
  brandTitle: "CODAC UI",
  brandUrl: "https://codac-ui.vercel.app/",
  brandTarget: "_blank",
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
  colorPrimary: "#FF8A80",
  colorSecondary: "#00897B",
};

export const light = create({
  base: "light",
  brandImage: "codac-ui.png",
  ...commonOptions,
});

export const dark = create({
  base: "dark",
  brandImage: "codac-ui.png",
  ...commonOptions,
});
