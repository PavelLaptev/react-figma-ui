// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { PanelHeader } from '.'

const meta: Meta<typeof PanelHeader> = {
  component: PanelHeader
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {}
