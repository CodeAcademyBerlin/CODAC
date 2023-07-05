import type { Meta, StoryObj } from "@storybook/react";
import { Bubble } from "./Bubble";

const meta: Meta<typeof Bubble> = {
  title: "Example/Bubble",
  component: Bubble,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Bubble>;

export const MyMessageLightmode: Story = {
  args: {
    darkmode: false,
    editable: true,
    content: "yolo",
    timestamp: "2023-06-22T10:30:00",
  },
};

export const OtherUserLightmode: Story = {
  args: {
    darkmode: false,
    editable: false,
    content: "oi",
    author: "Chewbacca",
    timestamp: "2023-06-21T11:30:00",
  },
};

export const MyMessageDarkmode: Story = {
  args: {
    darkmode: true,
    editable: true,
    content: "hola",
    timestamp: "2023-04-21T11:30:00",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const OtherUserMessageDarkmode: Story = {
  args: {
    darkmode: true,
    editable: false,
    content: "ciao",
    author: "Chewbacca",
    timestamp: "2023-05-21T17:20:00",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
