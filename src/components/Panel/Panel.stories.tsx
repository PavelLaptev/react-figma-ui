// Button.stories.ts|tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Panel } from '.'
import { Stack } from '../Stack'
import { Input } from '../Input'
import { Dropdown } from '../Dropdown'
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
        <Input
          id='input'
          label='Input label'
          onChange={(value) => console.log(value)}
        />
        <Dropdown
          label='Dropdown label'
          optionsSections={[
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
          ]}
          onChange={(value) => console.log(value)}
        />
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
