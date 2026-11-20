import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { SegmentedControl } from '.'

const meta: Meta<typeof SegmentedControl> = {
  component: SegmentedControl
}

export default meta

type Story = StoryObj<typeof SegmentedControl>

const options = [
  { value: 'all', label: 'All', title: 'Every collection' },
  { value: 'push', label: 'To push 2/3', title: 'Only the checked ones' }
]

// The parent owns the value, so the story keeps it in state
const Controlled = (args: React.ComponentProps<typeof SegmentedControl>) => {
  const [value, setValue] = React.useState(args.value)

  return <SegmentedControl {...args} value={value} onChange={setValue} />
}

export const Default: Story = {
  args: {
    value: 'all',
    options,
    'aria-label': 'Collections shown'
  },
  render: (args) => <Controlled {...args} />
}

export const WithDisabledOption: Story = {
  args: {
    value: 'light',
    options: [
      { value: 'light', label: 'Light' },
      { value: 'dark', label: 'Dark' },
      { value: 'system', label: 'System', disabled: true }
    ]
  },
  render: (args) => <Controlled {...args} />
}
