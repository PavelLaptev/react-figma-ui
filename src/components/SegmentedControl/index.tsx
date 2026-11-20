import React from 'react'

import { Text } from '../Text'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface SegmentedControlOption {
  value: string
  label: React.ReactNode
  /** Tooltip of the option */
  title?: string
  disabled?: boolean
}

export interface SegmentedControlProps {
  className?: string
  style?: React.CSSProperties
  /** The selected option. The parent owns it, so a change shows at once */
  value: string
  options: SegmentedControlOption[]
  onChange?: (value: string) => void
  /** Names the group for screen readers */
  'aria-label'?: string
}

/**
 * A row of options of which exactly one is selected. Built as a radio group:
 * Tab reaches the selected option, the arrow keys move the selection.
 */
export const SegmentedControl = (props: SegmentedControlProps) => {
  const buttonRefs = React.useRef<(HTMLButtonElement | null)[]>([])
  const enabled = props.options.filter((option) => !option.disabled)

  const select = (value: string) => {
    if (value !== props.value) {
      props.onChange && props.onChange(value)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const step =
      event.key === 'ArrowRight' || event.key === 'ArrowDown'
        ? 1
        : event.key === 'ArrowLeft' || event.key === 'ArrowUp'
          ? -1
          : 0

    if (!step || enabled.length === 0) return

    event.preventDefault()

    const current = enabled.findIndex((option) => option.value === props.value)
    const next = enabled[(current + step + enabled.length) % enabled.length]

    select(next.value)
    buttonRefs.current[props.options.indexOf(next)]?.focus()
  }

  return (
    <div
      className={joinClassNames(styles.segmentedControl, props.className)}
      style={props.style}
      role='radiogroup'
      aria-label={props['aria-label']}
      onKeyDown={handleKeyDown}
    >
      {props.options.map((option, index) => {
        const isSelected = option.value === props.value

        return (
          <button
            key={option.value}
            ref={(element) => {
              buttonRefs.current[index] = element
            }}
            type='button'
            role='radio'
            aria-checked={isSelected}
            className={joinClassNames(
              styles.option,
              isSelected && styles.selected
            )}
            disabled={option.disabled}
            // only the selected option is a tab stop
            tabIndex={isSelected ? 0 : -1}
            title={option.title}
            onClick={() => select(option.value)}
          >
            <Text className={styles.label}>{option.label}</Text>
          </button>
        )
      })}
    </div>
  )
}
