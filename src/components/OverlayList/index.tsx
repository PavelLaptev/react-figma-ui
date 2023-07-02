import React, { Fragment, forwardRef } from 'react'

import { Icon } from '../Icon'
import { Text } from '../Text'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface OptionProps {
  id: string
  label: string
  icon?: Icon16Type
  customIcon?: React.ReactNode
  caption?: string
}

export interface SectionProps {
  title?: string
  options: OptionProps[]
}

export interface PanelProps {
  hasShift?: boolean
  className?: string
  optionsSections: SectionProps[]
  onClick: (id: string) => void
}

export const OverlayList = forwardRef<any, PanelProps>((props, ref) => {
  const handleOptionLeftContent = (option: OptionProps) => {
    if (option.icon || option.customIcon) {
      return (
        <Icon
          className={styles.optionIcon}
          name={option.icon}
          customIcon={option.customIcon}
          size='16'
        />
      )
    }

    if (!option.icon && !option.customIcon) {
      if (props.hasShift) {
        return <Icon className={styles.optionIcon} name={'empty'} size='16' />
      }
    }

    return null
  }

  return (
    <div
      className={joinClassNames(styles.contextMenu, props.className)}
      ref={ref}
    >
      {props.optionsSections.map((section, i) => (
        <Fragment key={i}>
          {section.title && (
            <div className={styles.sectionTitleContainer}>
              {props.hasShift && (
                <Icon className={styles.optionIcon} name={'empty'} size='16' />
              )}
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
})

OverlayList.displayName = 'OverlayList'
