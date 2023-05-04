import type { Meta, StoryObj } from '@storybook/react'
import Navbar from './Navbar'


const meta = {
  title: 'Toxic-Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    brand: {
      id: 1,
      text: 'Home',
    },
    urls: [
      {
        id: 2,
        text: 'link-1',
      },
      {
        id: 3,
        text: 'link-2',
      },
      {
        id: 4,
        text: 'link-3',
      },
    ],
  },
}
