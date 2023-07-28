import React, { Fragment, useEffect } from 'react'

import { Text } from '../Text'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface OptionProps {
  id: string
  label: string
  caption?: string
  icon?: React.ReactNode
}

export interface SectionProps {
  title?: string
  options: OptionProps[]
}

export interface OverlayListProps {
  hasShift?: boolean
  className?: string
  style?: React.CSSProperties
  optionsSections: SectionProps[]
  onClick: (id: string) => void
  onOutsideClick?: () => void
  trigger?: HTMLElement
  maxHeight?: number
}

export const OverlayList = (props: OverlayListProps) => {
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const handleOptionLeftContent = (option: OptionProps) => {
    if (option.icon) {
      return <div className={styles.optionIcon}>{option.icon}</div>
    }

    if (!option.icon) {
      if (props.hasShift) {
        return <div className={styles.optionIcon} />
      }
    }

    return null
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        props.onOutsideClick && props.onOutsideClick()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (props.trigger && dropdownRef.current) {
      // prevent pointer events on the trigger
      props.trigger.style.pointerEvents = 'none'
      dropdownRef.current.style.pointerEvents = 'auto'

      return () => {
        if (props.trigger) {
          props.trigger.style.pointerEvents = 'auto'
        }
      }
    }
  }, [props.trigger, dropdownRef])

  return (
    <div
      className={joinClassNames(styles.contextMenu, props.className)}
      style={{
        maxHeight: `${props.maxHeight}px`,
        ...props.style
      }}
      ref={dropdownRef}
    >
      {props.optionsSections.map((section, i) => (
        <Fragment key={i}>
          {section.title && (
            <div className={styles.sectionTitleContainer}>
              {props.hasShift && <div className={styles.optionIcon} />}
              <Text className={styles.sectionTitle} fontSize={11}>
                {section.title}
              </Text>
            </div>
          )}
          {section.options.map((option, j) => (
            <div
              key={j}
              className={styles.option}
              onClick={() => props.onClick(option.id)}
            >
              {handleOptionLeftContent(option)}
              <div className={styles.optionText}>
                <Text className={styles.optionLabel} fontSize={11}>
                  {option.label}
                </Text>
                {option.caption && (
                  <Text className={styles.optionCaption} fontSize={11}>
                    {option.caption}
                  </Text>
                )}
              </div>
            </div>
          ))}
          {props.optionsSections.length - 1 !== i && (
            <div className={styles.divider} />
          )}
        </Fragment>
      ))}
    </div>
  )
}
