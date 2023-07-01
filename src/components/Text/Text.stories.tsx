// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { Text } from '.'

const meta: Meta<typeof Text> = {
  component: Text
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'Hello, world!',
    align: 'left',
    fontWeight: 'regular',
    fontSize: 11
  }
}
