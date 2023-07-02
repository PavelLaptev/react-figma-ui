import React from 'react'

import { Icon } from '../Icon'
import { Text } from '../Text'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface OptionProps {
  label: string
  icon?: Icon16Type
  customIcon?: React.ReactNode
  caption?: string
  onClick: () => void
}

export interface SectionProps {
  options: OptionProps[]
}

export interface PanelProps {
  className?: string
  sections: OptionProps[][]
}

const Option = (props: OptionProps) => {
  return (
    <div className={styles.option} onClick={props.onClick}>
      {(props.icon || props.customIcon) && (
        <Icon
          className={styles.optionIcon}
          name={props.icon}
          customIcon={props.customIcon}
          size='16'
        />
      )}
      <div className={styles.optionText}>
        <Text className={styles.optionLabel} fontSize={11}>
          {props.label}
        </Text>
        {props.caption && (
          <Text className={styles.optionCaption} fontSize={11}>
            {props.caption}
          </Text>
        )}
      </div>
    </div>
  )
}

const Section = (props: SectionProps) => {
  return (
    <div className={styles.section}>
      {props.options.map((option, index) => (
        <Option key={index} {...option} />
      ))}
    </div>
  )
}

export const Overlay = (props: PanelProps) => {
  return (
    <div className={joinClassNames(styles.contextMenu, props.className)}>
      {props.sections.map((section, index) => (
        <>
          <Section key={index} options={section} />

          {index < props.sections.length - 1 && (
            <div className={styles.divider} />
          )}
        </>
      ))}
    </div>
  )
}
