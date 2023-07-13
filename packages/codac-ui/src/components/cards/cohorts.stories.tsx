import type { Meta, StoryObj } from "@storybook/react";
import { Cohorts } from "./cohorts-card";

const meta = {
  component: Cohorts,
} satisfies Meta<typeof Cohorts>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: "John Doe",
    startDate: "2023-07-01",
  },
};


