// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react'

import { Toggle } from '.'

const meta: Meta<typeof Toggle> = {
  component: Toggle
}

export default meta

type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    disabled: false,
    checked: false
  }
}
