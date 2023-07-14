import React from 'react'

import { Text } from '../Text'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface InputProps {
  id?: string
  label?: string
  className?: string
  style?: React.CSSProperties
  value?: string
  disabled?: boolean
  isInvalid?: boolean
  placeholder?: string
  hasOutline?: boolean
  labelGreed?: number
  inputGreed?: number
  leftIcon?: React.ReactNode
  onChange?: (value: string) => void
  onFocus?: (value: string) => void
  onBlur?: (value: string) => void
}

export const Input = (props: InputProps) => {
  const [value, setValue] = React.useState(props.value)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    props.onChange && props.onChange(event.target.value)
  }

  return (
    <div
      className={joinClassNames(
        styles.inputContainer,
        props.className,
        props.label && styles.gridLayout
      )}
      style={{
        ...props.style
      }}
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
          onFocus={(e) => props.onFocus && props.onFocus(e.target.value)}
          onBlur={(e) => props.onBlur && props.onBlur(e.target.value)}
          placeholder={props.placeholder}
          className={joinClassNames(
            styles.input,
            props.hasOutline && styles.hasOutline,
            props.leftIcon && styles.hasLeftIcon,
            props.isInvalid && styles.isInvalid
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
