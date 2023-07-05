// Button.stories.ts|tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Stack } from '.'

const meta: Meta<typeof Stack> = {
  component: Stack as any
}

export default meta
type Story = StoryObj<typeof Stack>

const StackContent = () => {
  return <>hello world</>
}

export const WithChildren: Story = {
  args: {
    onClick: undefined,
    children: <StackContent />,
    direction: 'column',
    gap: 0,
    hasLeftRightPadding: true,
    hasTopBottomPadding: false
  }
}

export const Clickable: Story = {
  args: {
    onClick: () => {
      console.log('clicked')
    },
    children: <StackContent />,
    direction: 'column',
    gap: 0,
    hasLeftRightPadding: true,
    hasTopBottomPadding: false
  }
}
