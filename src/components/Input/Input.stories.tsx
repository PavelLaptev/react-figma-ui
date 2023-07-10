import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '.'
import { Icon } from '../Icon'

const meta: Meta<typeof Input> = {
  component: Input
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    id: 'input',
    onChange: (value) => {
      console.log(value)
    },
    disabled: false,
    value: '',
    hasOutline: true
  }
}

export const WithLabel: Story = {
  args: {
    id: 'input',
    label: 'Label',
    onChange: (value) => {
      console.log(value)
    },
    disabled: false,
    value: '',
    hasOutline: true
  }
}

export const WithPlaceholder: Story = {
  args: {
    id: 'input',
    placeholder: 'Placeholder',
    onChange: (value) => {
      console.log(value)
    },
    disabled: false,
    value: '',
    hasOutline: true
  }
}

export const WithIcon: Story = {
  args: {
    id: 'input',
    onChange: (value) => {
      console.log(value)
    },
    disabled: false,
    value: 'Custom value',
    hasOutline: true,
    leftIcon: <Icon name='color-styles' size='32' />
  }
}

export const WithError: Story = {
  args: {
    id: 'input',
    onChange: (value) => {
      console.log(value)
    },
    disabled: false,
    value: 'Custom value',
    hasOutline: true,
    isInvalid: true
  }
}
