import React, { ReactNode } from 'react'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface ToggleProps {
  children: ReactNode
  disabled?: boolean
  name?: string
  onChange: (checked: boolean) => void
  propagateEscapeKeyDown?: boolean
  checked?: boolean
}

export const Toggle = (props: ToggleProps) => {
  const [checked, setChecked] = React.useState(props.checked)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked)
    props.onChange(event.currentTarget.checked)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Escape') {
      return
    }
    if (props.propagateEscapeKeyDown === false) {
      event.stopPropagation()
    }
    event.currentTarget.blur()
  }

  return (
    <label
      className={joinClassNames(
        styles.toggle,
        props.disabled === true ? styles.disabled : null
      )}
    >
      <input
        checked={checked === true}
        className={styles.input}
        disabled={props.disabled === true}
        name={props.name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        tabIndex={props.disabled === true ? -1 : 0}
        type='checkbox'
      />
      <div className={styles.box} />
      <div className={styles.switch} />
      <div className={styles.children}>{props.children}</div>
    </label>
  )
}
