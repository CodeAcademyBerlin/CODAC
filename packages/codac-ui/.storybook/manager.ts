// .storybook/manager.js

import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";
import codacTheme from "./codacTheme";

addons.setConfig({
  theme: codacTheme,
});
