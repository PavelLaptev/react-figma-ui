import React, { ReactNode, ChangeEvent } from 'react'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface CheckboxProps {
  children: ReactNode
  id: string
  onChange: (checked: boolean) => void
  disabled?: boolean
  checked?: boolean
}

export const Toggle = (props: CheckboxProps) => {
  const [checked, setChecked] = React.useState(props.checked)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked)
    props.onChange(event.currentTarget.checked)
  }

  return (
    <label
      className={joinClassNames(
        styles.toggleContainer,
        props.disabled && styles.disabled
      )}
    >
      <div className={styles.toggleSymbol}>
        <input
          checked={checked}
          className={styles.input}
          disabled={props.disabled}
          name={props.id}
          onChange={handleChange}
          type='checkbox'
        />
        <div className={styles.toggle}>
          <div className={styles.toggleIconInner} />
        </div>
      </div>

      <div className={styles.children}>{props.children}</div>
    </label>
  )
}