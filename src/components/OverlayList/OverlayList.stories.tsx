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

export const AllInOneWithScroll: Story = {
  args: {
    maxHeight: 120,
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

const TemplateAbsolutePosition = () => {
  const [show, setShow] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <div style={{ height: 200, position: 'relative' }} ref={ref}>
      <button
        onClick={() => {
          console.log('click button')
          setShow(true)
        }}
      >
        Toggle
      </button>

      {show && (
        <OverlayList
          trigger={ref.current}
          onClick={(id: string) => {
            console.log(id)
          }}
          onOutsideClick={() => setShow(false)}
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
        />
      )}
    </div>
  )
}

export const AbsolutePosition: Story = {
  render: () => <TemplateAbsolutePosition />
}
