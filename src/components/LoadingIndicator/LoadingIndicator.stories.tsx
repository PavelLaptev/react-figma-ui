// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { LoadingIndicator } from '.'

const meta: Meta<typeof LoadingIndicator> = {
  component: LoadingIndicator
}

export default meta
type Story = StoryObj<typeof LoadingIndicator>

export const Default: Story = {}
