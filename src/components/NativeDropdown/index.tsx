import React from 'react'

import { OptionProps } from '../OverlayList'

import { OverlayList } from '../OverlayList'
import { Text } from '../Text'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface NativeDropdownProps {
  label?: string
  id?: string
  className?: string
  value?: string
  options: {
    id: string
    label: string
  }[]
  onChange: (value: string) => void
  labelGreed?: number
  inputGreed?: number
}

export const NativeDropdown = (props: NativeDropdownProps) => {
  const [value, setValue] = React.useState(props.value)

  React.useEffect(() => {
    if (props.value) {
      setValue(props.value)
    }
  }, [props.value])

  return (
    <div
      className={joinClassNames(
        styles.dropdownContainer,
        props.className,
        props.label && styles.gridLayout
      )}
      id={props.id}
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
      <div
        className={joinClassNames(styles.dropdownMenuContainer)}
        style={{
          ...(props.inputGreed && { gridColumn: `span ${props.inputGreed}` })
        }}
      >
        <select
          className={styles.dropdown}
          value={value}
          onChange={(event) => {
            // console.log(event.target.value)
            setValue(event.target.value)
            props.onChange(event.target.value)
          }}
        >
          {props.options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        <svg
          width='8'
          height='7'
          viewBox='0 0 8 7'
          xmlns='http://www.w3.org/2000/svg'
          className={styles.dropdownIcon}
        >
          <path
            d='M3.646 5.354l-3-3 .708-.708L4 4.293l2.646-2.647.708.708-3 3L4 5.707l-.354-.353z'
            fillRule='evenodd'
            fillOpacity='1'
            stroke='none'
          />
        </svg>
      </div>
    </div>
  )
}
