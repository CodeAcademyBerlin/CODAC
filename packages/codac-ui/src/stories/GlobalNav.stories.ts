import type { Meta, StoryObj } from "@storybook/react";

import { GlobalNav } from "../ui/global-nav";
import { navData } from "./navSampleData";

const meta = {
  component: GlobalNav,
  args: {
    navigation: navData,
    header: "Demo Header",
  },
} satisfies Meta<typeof GlobalNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
