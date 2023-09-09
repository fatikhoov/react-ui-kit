import type { Meta, StoryObj } from '@storybook/react'

import MyButton from './MyButton'

const meta: Meta<typeof MyButton> = {
  title: 'UI-Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    fvclassname: {
      control: {
        disable: true, // Запрещаем отображение этого пропса в controls
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof MyButton>

export const Primary: Story = {
  args: {
    children: 'Starpage Primary',
    fvclassname: 'fv-button middle background',
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Starpage Secondary',
    fvclassname: 'fv-button middle',
    disabled: false,
  },
}
export const Disabled: Story = {
  args: {
    children: 'Starpage Disabled',
    fvclassname: 'fv-button middle background',
    disabled: true,
  },
}
