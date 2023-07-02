// Button.stories.ts|tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { PanelHeader } from '.'

const meta: Meta<typeof PanelHeader> = {
  component: PanelHeader
}

export default meta
type Story = StoryObj<typeof PanelHeader>

export const WithTitleAndIcon: Story = {
  args: {
    title: 'Panel Header',
    isActive: false,
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

export const WithIcon: Story = {
  args: {
    isActive: false,
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
