// Button.stories.ts|tsx
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../Icon'
import { ToggleRow } from '.'

const meta: Meta<typeof ToggleRow> = {
  component: ToggleRow
}

export default meta

type Story = StoryObj<typeof ToggleRow>

export const Default: Story = {
  args: {
    checked: false,
    label: 'Label',
    icon: <Icon name='color-styles' size='32' />,
    onChange: (checked) => {
      console.log(checked)
    }
  }
}
