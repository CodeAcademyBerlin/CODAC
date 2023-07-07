import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryLightmode: Story = {
  args: {
    primary: true,
    darkmode: false,
    label: "Send",
  },
};

export const PrimaryDarkmode: Story = {
  args: {
    primary: true,
    darkmode: true,
    label: "Join",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const SecondaryLightmode: Story = {
  args: {
    primary: false,
    darkmode: false,
    label: "Send",
  },
};

export const SecondaryDarkmode: Story = {
  args: {
    primary: false,
    darkmode: true,
    label: "Join",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
