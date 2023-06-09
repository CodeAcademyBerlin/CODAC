import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../buttons/Button";
import { MainContainer } from "./MainContainer";
const Container = () => {
  return (
    <MainContainer>
      <Button label="test button" />
    </MainContainer>
  );
};
const meta = {
  title: "Toxic-Container",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof MainContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: typeof Button,
  },
};
