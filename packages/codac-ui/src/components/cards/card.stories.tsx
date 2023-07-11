import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "John Doe",
    startDate: "2023-07-01",
    github: "https://github.com/johndoe",
    linkdin: "https://linkedin.com/in/johndoe",
    course: "Full Stack Development",
    email: "johndoe@example.com",
  },
};