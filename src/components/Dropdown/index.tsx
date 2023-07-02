import React from 'react'

import { SectionProps } from '../OverlayList'

import { OverlayList } from '../OverlayList'
import { Text } from '../Text'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface PanelProps {
  label?: string
  id?: string
  className?: string
  value: string
  optionsSections: SectionProps[]
  onChange: (value: string) => void
  labelFlex?: number
  inputFlex?: number
}

export const Dropdown = (props: PanelProps) => {
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const [value, setValue] = React.useState('')
  const [isOpened, setIsOpened] = React.useState(false)

  const findLabelById = (id: string) => {
    const label = props.optionsSections
      .map((section) => section.options)
      .flat()

      .find((option) => option.id === id)?.label

    return label
  }

  const handleToggle = () => {
    setIsOpened(!isOpened)
  }

  React.useEffect(() => {
    const label = findLabelById(props.value)
    setValue(label)
  }, [props.value])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpened(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className={joinClassNames(styles.dropdownContainer, props.className)}
      id={props.id}
    >
      {props.label && (
        <Text
          className={styles.label}
          style={{
            flex: props.labelFlex
          }}
        >
          {props.label}
        </Text>
      )}
      <div
        className={joinClassNames(styles.dropdownMenuContainer)}
        style={{
          flex: props.inputFlex
        }}
      >
        {isOpened && (
          <OverlayList
            ref={dropdownRef}
            className={styles.overlayList}
            optionsSections={props.optionsSections}
            onClick={(id) => {
              const label = findLabelById(id)
              setValue(label)
              handleToggle()
              props.onChange(id)
            }}
          />
        )}
        <div className={styles.dropdown} onClick={handleToggle}>
          <Text>{value}</Text>
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
    </div>
  )
}
