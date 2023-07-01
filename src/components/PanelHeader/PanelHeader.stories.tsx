// Button.stories.ts|tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { PanelHeader } from '.'

const meta: Meta<typeof PanelHeader> = {
  component: PanelHeader
}

export default meta
type Story = StoryObj<typeof PanelHeader>

export const Default: Story = {
  args: {
    title: 'Panel Header',
    iconButtons: [
      {
        icon: 'plus',
        onClick: () => {
          console.log('plus')
        }
      }
    ]
  }
}
