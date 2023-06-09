import path, { resolve } from "node:path";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.{ts,tsx}"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  framework: {
    // name: '@storybook/react-webpack5', // Remove this
    name: "@storybook/nextjs", // Add this
    options: {},
  },
  // framework: path.resolve(require.resolve('@storybook/nextjs/preset'), '..'),
  core: {
    // disableTelemetry: true,
    enableCrashReports: true,
  },

  staticDirs: [resolve(__dirname, "..", "src", "assets")],
  webpackFinal: async (config) => {
    if (config.resolve?.fallback)
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        zlib: false,
        stream: false,
      };
    return config;
  },
};
export default config;
