import { Button } from "../ui/button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const ButtonStory = {
  // title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: {
  //     control: "color",
  //   },
  // },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Error = {
  args: {
    type: "error",
    children: "Error",
  },
};

export const Default = {
  args: {
    type: "default",
    children: "Default",
  },
};

export default ButtonStory;
