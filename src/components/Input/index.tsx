import React from 'react'

import { Text } from '../Text'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface InputProps {
  id?: string
  label?: string
  className?: string
  value?: string
  disabled?: boolean
  onChange: (value: string) => void
  hasOutline?: boolean
  labelGreed?: number
  inputGreed?: number
  leftIcon?: React.ReactNode
}

export const Input = (props: InputProps) => {
  const [value, setValue] = React.useState(props.value)

  React.useEffect(() => {
    setValue(props.value)
  }, [props.value])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    props.onChange(event.target.value)
  }

  return (
    <div
      className={joinClassNames(
        styles.inputContainer,
        props.className,
        props.label && styles.gridLayout
      )}
    >
      {props.label && (
        <Text
          className={styles.label}
          style={{
            ...(props.labelGreed && { gridColumn: `span ${props.labelGreed}` })
          }}
        >
          {props.label}
        </Text>
      )}
      <div className={styles.inputWrapper}>
        {props.leftIcon && (
          <div className={styles.leftIcon}>{props.leftIcon}</div>
        )}
        <input
          id={props.id}
          type='text'
          value={value}
          disabled={props.disabled}
          onChange={onChange}
          className={joinClassNames(
            styles.input,
            props.hasOutline && styles.hasOutline,
            props.leftIcon && styles.hasLeftIcon
          )}
          style={{
            ...(props.inputGreed && { gridColumn: `span ${props.inputGreed}` })
          }}
        />
      </div>
    </div>
  )
}

Input.defaultProps = {
  hasOutline: true
}
