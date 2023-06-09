import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./card";

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    tag: "tag",
    image: "codac-logo.png",
  },
};
