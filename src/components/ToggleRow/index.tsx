import React, { useEffect } from 'react'

import { Stack } from '../Stack'
import { Text } from '../Text'
import { Toggle } from '../Toggle'

import styles from './styles.module.css'

interface ToggleRowProps {
  id: string
  label: string
  icon?: React.ReactNode
  checked?: boolean
  onChange?: (value: boolean) => void
}

export const ToggleRow = (props: ToggleRowProps) => {
  const [checked, setChecked] = React.useState(props.checked)

  const handleChange = () => {
    setChecked(!checked)
    props.onChange && props.onChange(!checked)
  }

  useEffect(() => {
    setChecked(props.checked)
  }, [props.checked])

  return (
    <Stack className={styles.toggleRow} direction='row' onClick={handleChange}>
      {props.icon}
      <div className={styles.label}>
        <Text>{props.label}</Text>
      </div>
      <Toggle id={props.id} checked={checked} />
    </Stack>
  )
}
