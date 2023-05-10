// .storybook/manager.js

import { addons } from "@storybook/manager-api";
import codacTheme from "./codacTheme";

addons.setConfig({
  theme: codacTheme,
});
