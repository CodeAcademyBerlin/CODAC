import type { Meta, StoryObj } from "@storybook/react";

import { Default } from "./Button.stories";
import { Page } from "./Page";

const meta = {
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallMobile: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const LargeMobile: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};

export const Tablet: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
