import { Meta, StoryObj } from '@storybook/react'
import MainContainer from './MainContainer'
import Button from '../buttons/Button'
const meta = {
  title: 'Toxic-Container',
  component: MainContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof MainContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: typeof Button,
  },
}
