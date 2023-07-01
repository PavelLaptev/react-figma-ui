// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  component: Button
}

const defaultArgs = {
  label: 'Click me',
  danger: false,
  disabled: false,
  fullWidth: false,
  loading: false,
  propagateEscapeKeyDown: true,
  secondary: false
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: defaultArgs
}
