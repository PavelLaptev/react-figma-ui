// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    id: 'checkbox',
    onChange: (checked) => {
      console.log(checked)
    },
    disabled: false,
    checked: false,
    children: 'Checkbox'
  }
}
