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
    image:
      "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1687517184/small_titan_b8d03ee321.jpg",
  },
};


