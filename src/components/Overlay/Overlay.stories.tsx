import type { Meta, StoryObj } from '@storybook/react'

import { Overlay } from '.'

const meta: Meta<typeof Overlay> = {
  component: Overlay
}

export default meta

type Story = StoryObj<typeof Overlay>

export const AllInOne: Story = {
  args: {
    sections: [
      [
        {
          label: 'Option 1',
          caption: 'caption',
          icon: 'code',
          onClick: () => {
            console.log('Option 1')
          }
        },
        {
          label: 'Option 2',
          caption: 'caption',
          icon: 'lock',
          onClick: () => {
            console.log('Option 2')
          }
        }
      ],
      [
        {
          label: 'Option 3',
          caption: 'caption',
          icon: 'empty',
          onClick: () => {
            console.log('Option 3')
          }
        },
        {
          label: 'Option 4',
          caption: 'caption',
          icon: 'empty',
          onClick: () => {
            console.log('Option 4')
          }
        }
      ]
    ]
  }
}

export const SimpleText: Story = {
  args: {
    sections: [
      [
        {
          label: 'Option 1',

          onClick: () => {
            console.log('Option 1')
          }
        },
        {
          label: 'Option 2',

          onClick: () => {
            console.log('Option 2')
          }
        },
        {
          label: 'Option 3',
          onClick: () => {
            console.log('Option 3')
          }
        },
        {
          label: 'Option 4',
          onClick: () => {
            console.log('Option 4')
          }
        }
      ]
    ]
  }
}
