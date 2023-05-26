import type { Meta, StoryObj } from "@storybook/react";

import { CodacLogoText } from "./codac-logo";

const meta = {
  component: CodacLogoText,
  args: {
    className: "h-20 w-auto fill-primary",
  },
} satisfies Meta<typeof CodacLogoText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Error = {
  args: {
    className: "h-20 w-auto fill-primary",
  },
};

export const Secondary = {
  args: {
    className: "h-20 w-auto fill-secondary",
  },
};
