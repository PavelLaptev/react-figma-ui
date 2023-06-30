// Button.stories.ts|tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta: Meta<typeof Button> = {
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Button>Primary</Button>
}

export const Secondary: Story = {
  render: () => <Button secondary>Secondary</Button>
}

export const Danger: Story = {
  render: () => <Button danger>Danger</Button>
}

export const Disabled: Story = {
  render: () => <Button disabled>Disabled</Button>
}

export const Loading: Story = {
  render: () => <Button loading>Loading</Button>
}
