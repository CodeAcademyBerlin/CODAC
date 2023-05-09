import { GlobalNav } from "../ui/global-nav";
import { demos } from "../../demo/demos";

const GlobalNavStory = {
  title: "Layout/GlobalNav",
  component: GlobalNav,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ["autodocs"],
  // parameters: {
  //   // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: "fullscreen",
  // },
};
export const Demo = {
  args: {
    navigation: demos,
    header: "Demo",
  },
};

export default GlobalNavStory;
