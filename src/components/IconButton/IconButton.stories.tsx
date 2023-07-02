// Button.stories.ts|tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../Icon'
import { IconButton } from '.'

const meta: Meta<typeof IconButton> = {
  component: IconButton
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    disabled: false,
    isActive: false,
    children: <Icon name='scale' size='32' />
  }
}
