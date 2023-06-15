import type { Meta, StoryObj } from "@storybook/react";

import { BlankLayout } from "..";
import { LandingGraphics } from "./landing-graphics";

const meta = {
  component: LandingGraphics,
  decorators: [
    (Story) => (
      <BlankLayout>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </BlankLayout>
    ),
  ],
} satisfies Meta<typeof LandingGraphics>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "default",
  },

  argTypes: {
    color: {
      options: ["pink", "blue", "violet", "cyan", "orange", "default"],
      control: { type: "select" },
    },
  },
};
