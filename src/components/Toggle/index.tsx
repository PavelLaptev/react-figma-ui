import React, { ReactNode, ChangeEvent, useEffect } from 'react'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface CheckboxProps {
  className?: string
  style?: React.CSSProperties
  children?: ReactNode
  id: string
  onChange?: (checked: boolean) => void
  disabled?: boolean
  checked?: boolean
}


const defaultProps = {
  checked: false
}

export const Toggle = (props: CheckboxProps) => {
  props = { ...defaultProps, ...props }

  const [checked, setChecked] = React.useState(props.checked)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked)
    props.onChange && props.onChange(event.currentTarget.checked)
  }

  useEffect(() => {
    setChecked(props.checked)
  }, [props.checked])

  return (
    <label
      className={joinClassNames(
        styles.toggleContainer,
        props.disabled && styles.disabled,
        props.className
      )}
      htmlFor={props.id}
      style={{
        ...props.style
      }}
    >
      <div className={styles.toggleSymbol}>
        <input
          checked={checked}
          className={styles.input}
          disabled={props.disabled}
          id={props.id}
          name={props.id}
          onChange={handleChange}
          type='checkbox'
        />
        <div className={styles.toggle}>
          <div className={styles.toggleIconInner} />
        </div>
      </div>

      {props.children && (
        <div className={styles.children}>{props.children}</div>
      )}
    </label>
  )
}