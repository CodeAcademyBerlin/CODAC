import type { Meta, StoryObj } from '@storybook/react'

import Dropdown from './Dropdown'

const meta = {
  title: 'Toxic-Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    background: 'bg-dark',
    textColor: 'text-light',
  },
}
