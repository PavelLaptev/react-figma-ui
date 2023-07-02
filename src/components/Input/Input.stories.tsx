// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '.'

const meta: Meta<typeof Input> = {
  component: Input
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    id: 'input',
    onChange: (value) => {
      console.log(value)
    },
    disabled: false,
    value: '',
    hasOutline: true
  }
}
