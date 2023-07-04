import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../Icon'
import { OverlayList } from '.'

const meta: Meta<typeof OverlayList> = {
  component: OverlayList
}

export default meta

type Story = StoryObj<typeof OverlayList>

export const SimpleSection: Story = {
  args: {
    onClick: (id: string) => {
      console.log(id)
    },
    optionsSections: [
      {
        options: [
          {
            id: 'option-1',
            label: 'Option 1'
          },
          {
            id: 'option-2',
            label: 'Option 2'
          }
        ]
      }
    ]
  }
}

export const AllInOne: Story = {
  args: {
    hasShift: true,
    onClick: (id: string) => {
      console.log(id)
    },
    optionsSections: [
      {
        options: [
          {
            id: 'option-1',
            label: 'Option 1',
            caption: 'caption',
            icon: <Icon name='code' size='16' />
          },
          {
            id: 'option-2',
            label: 'Option 2',
            caption: 'caption',
            icon: <Icon name='text' size='32' />
          }
        ]
      },
      {
        title: 'Section title',
        options: [
          {
            id: 'option-3',
            label: 'Option 3',
            caption: 'caption'
          },
          {
            id: 'option-4',
            label: 'Option 4',
            caption: 'caption'
          }
        ]
      }
    ]
  }
}
