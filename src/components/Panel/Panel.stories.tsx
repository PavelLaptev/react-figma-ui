// Button.stories.ts|tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Panel } from '.'
import { Stack } from '../Stack'
import { PanelHeader } from '../PanelHeader'

const meta: Meta<typeof Panel> = {
  component: Panel
}

export default meta
type Story = StoryObj<typeof Panel>

const PanelContent = () => {
  return (
    <>
      <Stack>
        <PanelHeader title='Panel Header' />
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
