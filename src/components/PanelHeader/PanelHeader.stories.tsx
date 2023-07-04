// Button.stories.ts|tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { OverlayList } from '../OverlayList'
import { Icon } from '../Icon'
import { PanelHeader } from '.'

const meta: Meta<typeof PanelHeader> = {
  component: PanelHeader
}

export default meta
type Story = StoryObj<typeof PanelHeader>

export const WithTitleAndIcon: Story = {
  args: {
    title: 'Panel Header',
    isActive: false,
    iconButtons: [
      {
        children: <Icon name='plus' size='32' />,
        onClick: () => {
          console.log('plus')
        }
      }
    ]
  }
}

export const WithIcon: Story = {
  args: {
    isActive: false,
    iconButtons: [
      {
        children: <Icon name='plus' size='32' />,
        onClick: () => {
          console.log('plus')
        }
      }
    ]
  }
}

const DropdownTemplate = () => {
  const [showDropdown, setShowDropdown] = React.useState(false)

  return (
    <>
      <PanelHeader
        title='Panel Header'
        isActive={false}
        iconButtons={[
          {
            children: (
              <>
                <Icon name='plus' size='32' />

                {showDropdown && (
                  <OverlayList
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      zIndex: 1
                    }}
                    onClick={(id) => {
                      console.log(id)
                    }}
                    onOutsideClick={() => {
                      setShowDropdown(false)
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
                          }
                        ]
                      }
                    ]}
                  />
                )}
              </>
            ),
            onClick: () => {
              setShowDropdown(!showDropdown)
            }
          }
        ]}
      />
    </>
  )
}

export const WithDropdown: Story = {
  render: () => <DropdownTemplate />
}
