import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../Icon'
import { Tabs } from '.'

const meta: Meta<typeof Tabs> = {
  component: Tabs
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  args: {
    value: 'design',
    onChange: (value) => {
      console.log(value)
    },
    options: [
      {
        value: 'design',
        label: 'Design'
      },
      {
        value: 'prototype',
        label: 'Prototype'
      }
    ]
  }
}

export const WithIcons: Story = {
  args: {
    value: 'design',
    iconButtons: [
      {
        children: <Icon name='plus' size='32' />,
        onClick: () => {
          console.log('plus')
        }
      }
    ],
    onChange: (value) => {
      console.log(value)
    },
    options: [
      {
        value: 'design',
        label: 'Design'
      },
      {
        value: 'prototype',
        label: 'Prototype'
      }
    ]
  }
}
