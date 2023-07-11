import type { Meta, StoryObj } from "@storybook/react";

import { CardProps, Cohorts } from "./cohorts-card";
import { JSX } from "react";

const meta = {
  component: Cohorts,
} satisfies Meta<typeof Cohorts>;

export default meta;

type Story = StoryObj<typeof meta>

const Template: Story<CardProps> = (args: JSX.IntrinsicAttributes & CardProps) => <Cohorts {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "John Doe",
  startDate: "2023-07-01",
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe",
  course: "Full Stack Development",
};
export const WithImage = Template.bind({});
WithImage.args = {
  image: "https://example.com/image.jpg",
  title: "Jane Smith",
  startDate: "2023-07-01",
  github: "https://github.com/janesmith",
  linkedin: "https://linkedin.com/in/janesmith",
  course: "Front-end Development",
};

