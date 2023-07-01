// Button.stories.ts|tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Panel } from '.'
import { Stack } from '../Stack'
import { Text } from '../Text'

const meta: Meta<typeof Panel> = {
  component: Panel
}

export default meta
type Story = StoryObj<typeof Panel>

const PanelContent = () => {
  return (
    <>
      <Stack>
        <Text>Panel content</Text>
      </Stack>
    </>
  )
}

export const Empty: Story = {}

export const WithChildren: Story = {
  args: {
    children: <PanelContent />
  }
}
