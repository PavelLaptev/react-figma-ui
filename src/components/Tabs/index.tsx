import React from 'react'

import { IconButton, IconButtonProps } from '../IconButton'
import { Panel } from '../Panel'
import { Text } from '../Text'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface TabsProps {
  className?: string
  style?: React.CSSProperties
  value?: string
  options?: {
    value: string
    label: string
  }[]
  onChange?: (value: string) => void
  iconButtons?: IconButtonProps[]
}

export const Tabs = (props: TabsProps) => {
  const [value, setValue] = React.useState(props.value)

  const handleChange = (value: string) => {
    setValue(value)
    props.onChange && props.onChange(value)
  }

  return (
    <Panel
      className={joinClassNames(styles.tabsContainer, props.className)}
      style={{
        ...props.style
      }}
      hasLeftRightPadding
    >
      <div className={styles.tabs}>
        {props.options?.map((option) => (
          <div
            key={option.value}
            className={joinClassNames(
              styles.tabItem,
              value === option.value && styles.activeTab
            )}
            onClick={() => handleChange(option.value)}
          >
            <Text key={option.value} className={styles.tabText}>
              {option.label}
            </Text>
          </div>
        ))}
      </div>

      {props.iconButtons && (
        <div className={styles.buttons}>
          {props.iconButtons.map((iconButton, index) => (
            <IconButton
              key={index}
              onClick={iconButton.onClick}
              disabled={iconButton.disabled}
              isActive={iconButton.isActive}
            >
              {iconButton.children}
            </IconButton>
          ))}
        </div>
      )}
    </Panel>
  )
}
