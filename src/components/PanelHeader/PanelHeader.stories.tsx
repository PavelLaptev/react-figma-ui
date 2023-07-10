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

export const WithBackButton: Story = {
  args: {
    title: 'Panel Header',
    isActive: true,
    hasBackButton: true
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
  const panelHeaderRef = React.useRef<HTMLDivElement>(null)
  const [showDropdown, setShowDropdown] = React.useState(false)

  const handleMenuClose = () => {
    setShowDropdown(false)
    console.log('close')
  }

  React.useEffect(() => {
    console.log(showDropdown)
  }, [showDropdown])

  return (
    <>
      <PanelHeader
        ref={panelHeaderRef}
        title='Panel Header'
        isActive={false}
        onClick={() => {
          setShowDropdown(true)
        }}
        iconButtons={[
          {
            children: <Icon name='plus' size='32' />,
            onClick: () => {
              console.log('plus')
            }
          },
          {
            onClick: () => {
              setShowDropdown(true)
            },
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
                    trigger={panelHeaderRef.current}
                    onClick={handleMenuClose}
                    onOutsideClick={handleMenuClose}
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
            )
          }
        ]}
      />
    </>
  )
}

export const WithDropdown: Story = {
  render: () => <DropdownTemplate />
}
