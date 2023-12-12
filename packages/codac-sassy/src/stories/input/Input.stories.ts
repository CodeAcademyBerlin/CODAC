import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Lightmode: Story = {
  args: {
    darkmode: false,
  },
};

export const Darkmode: Story = {
  args: {
    darkmode: true,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
