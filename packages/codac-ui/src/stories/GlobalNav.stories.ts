import { demos } from "../../demo/demos";
import { GlobalNav } from "../ui/global-nav";

const GlobalNavStory = {
  component: GlobalNav,
  parameters: {
    layout: "fullscreen",
  },
};
export const Demo = {
  args: {
    navigation: demos,
    header: "Demo",
  },
};

export default GlobalNavStory;
