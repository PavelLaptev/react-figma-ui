import React, { ReactNode, ChangeEvent, useEffect } from 'react'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface CheckboxProps {
  className?: string
  style?: React.CSSProperties
  children?: ReactNode
  id: string
  onChang?: (checked: boolean) => void
  disabled?: boolean
  checked?: boolean
}

export const Checkbox = (props: CheckboxProps) => {
  const [checked, setChecked] = React.useState(props.checked)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked)
    props.onChang && props.onChang(event.currentTarget.checked)
  }

  useEffect(() => {
    setChecked(props.checked)
  }, [props.checked])

  return (
    <label
      htmlFor={props.id}
      className={joinClassNames(
        styles.checkboxContainer,
        props.disabled && styles.disabled,
        props.className
      )}
      style={{
        ...props.style
      }}
    >
      <div className={styles.checkboxSymbol}>
        <input
          checked={checked}
          className={styles.input}
          disabled={props.disabled}
          name={props.id}
          onChange={handleChange}
          type='checkbox'
        />
        <div className={styles.checkbox}>
          {checked && (
            <svg className={styles.checkIcon} viewBox='0 0 12 12'>
              <path d='m3.17647 4.82377 1.88235 1.88236 3.76471-3.76472L10 4.11788l-4.94118 4.9412L2 6.00024l1.17647-1.17647Z' />
            </svg>
          )}
        </div>
      </div>

      {props.children && (
        <div className={styles.children}>{props.children}</div>
      )}
    </label>
  )
}

Checkbox.defaultProps = {
  checked: false
}
