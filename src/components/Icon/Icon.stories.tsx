import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import icons32 from './icons32.json'
import icons16 from './icons16.json'
import { Icon } from '.'

const meta: Meta<typeof Icon> = {
  component: Icon
}
export default meta

type Story = StoryObj<typeof Icon>

const Template = ({
  collection,
  size
}: {
  collection: object
  size: '32' | '16'
}) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.keys(collection).map((icon: any) => (
        <div
          key={icon}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 100,
            padding: 20,
            gap: 10
          }}
        >
          <Icon name={icon} size={size} />
          <span style={{ fontSize: 10, textAlign: 'center' }}>{icon}</span>
        </div>
      ))}
    </div>
  )
}

export const Large32: Story = {
  render: () => <Template collection={icons32} size='32' />
}

export const Small16: Story = {
  render: () => <Template collection={icons16} size='16' />
}
