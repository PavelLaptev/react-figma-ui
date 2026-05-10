// Button.stories.ts|tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from '.'
import { Icon } from '../Icon'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  args: {
    label: 'Social',
    value: 'github',
    onChange: (id) => {
      console.log(id)
    },
    optionsSections: [
      {
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
            label: 'Facebook'
          }
        ]
      }
    ]
  }
}

export const WithIcon: Story = {
  args: {
    label: 'Social',
    value: 'github',
    leftIcon: <Icon name='color-styles' size='32' />,
    onChange: (id) => {
      console.log(id)
    },
    optionsSections: [
      {
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
            label: 'Facebook'
          }
        ]
      }
    ]
  }
}

export const ReactiveSelected: Story = {
  render: () => {
    const [selected, setSelected] = React.useState('twitter')

    return (
      <Dropdown
        label='Social'
        selected={selected}
        onChange={(id) => {
          setSelected(id)
        }}
        optionsSections={[
          {
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
                label: 'Facebook'
              }
            ]
          }
        ]}
      />
    )
  }
}
