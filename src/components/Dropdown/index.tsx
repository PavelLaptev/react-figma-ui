import React from 'react'

import { SectionProps } from '../OverlayList'

import { OverlayList } from '../OverlayList'
import { Text } from '../Text'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface DropdownProps {
  label?: string
  id?: string
  className?: string
  value?: string
  optionsSections: SectionProps[]
  onChange: (value: string) => void
  labelGreed?: number
  inputGreed?: number
  maxHeight?: number
}

export const Dropdown = (props: DropdownProps) => {
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
    if (props.value) {
      const label = findLabelById(props.value)
      setValue(label)
    }

    if (!props.value) {
      setValue(props.optionsSections[0].options[0].label)
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
        {isOpened && (
          <OverlayList
            maxHeight={props.maxHeight}
            className={styles.overlayList}
            optionsSections={props.optionsSections}
            onClick={(id) => {
              const label = findLabelById(id)
              setValue(label)
              handleToggle()
              props.onChange(id)
            }}
            onOutsideClick={() => {
              setIsOpened(false)
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
