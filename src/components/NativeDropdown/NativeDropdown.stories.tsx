// Button.stories.ts|tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { NativeDropdown } from '.'

const meta: Meta<typeof NativeDropdown> = {
  component: NativeDropdown
}

export default meta

type Story = StoryObj<typeof NativeDropdown>

export const Default: Story = {
  args: {
    label: 'Social',
    value: 'github',
    onChange: (id) => {
      console.log('story event', id)
    },
    options: [
      {
        id: 'github',
        label: 'GitHub'
      },
      {
        id: 'twitter',
        label: 'Twitter'
      },
      {
        id: 'linkedin',
        label: 'LinkedIn'
      },
      {
        id: 'facebook',
        label: 'Facebook sdfsdfsdf'
      }
    ]
  }
}
