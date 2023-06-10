import type { Meta, StoryObj } from "@storybook/react";

import { CardShiny } from "./card-shiny";

const meta = {
  component: CardShiny,
} satisfies Meta<typeof CardShiny>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: "Card Title",
    subheader: "Card Subtitle",
  },
};
