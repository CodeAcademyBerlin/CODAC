import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

const cardImg = require('../../assets/stockImage.png')

const meta = {
  title: 'Toxic-Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    key: 1,
    cta: 'action button',
    img: cardImg,
    subtitle: 'I am the subtitle',
    title: 'I am the Title',
    text: 'lorem ipsum dolor consecuencias de my own acciones lorem ipsum dolor consecuencias de my own acciones',
  },
}