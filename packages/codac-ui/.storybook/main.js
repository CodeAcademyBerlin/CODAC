import path, { resolve } from "node:path";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.{ts,tsx}"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  framework: path.resolve(require.resolve("@storybook/nextjs/preset"), ".."),
  // framework: {
  //   name: "@storybook/nextjs",
  //   options: {},
  // },
  core: {
    // disableTelemetry: true,
    enableCrashReports: true,
  },

  staticDirs: [resolve(__dirname, "..", "assets")],
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
