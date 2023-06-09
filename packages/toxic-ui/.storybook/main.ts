import type { StorybookConfig } from "@storybook/react-webpack5";

const isWindows = process.platform === "win32";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: isWindows ? ["..\\public"] : ["../public"], //based on OS conditionally use static dirs for storybook
};

export default config;
