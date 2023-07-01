import React from 'react'

import { Icon } from '../Icon'
import { IconButton } from '../IconButton'
import { Text } from '../Text'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export type PanelHeaderProps = {
  className?: string
  style?: React.CSSProperties
  title?: string
  isActive?: boolean
  onClick?: () => void
  iconButtons?: {
    icon: string
    onClick: () => void
  }[]
}

export const PanelHeader = (props: PanelHeaderProps) => {
  return (
    <div
      className={joinClassNames(styles.panelHeader, props.className)}
      style={{
        ...props.style
      }}
      onClick={props.onClick}
    >
      <Text className={styles.title} fontSize={11} fontWeight='bold'>
        {props.title}
      </Text>
      {props.iconButtons && (
        <div className={styles.buttons}>
          {props.iconButtons.map((iconButton, index) => (
            <IconButton key={index} onClick={iconButton.onClick}>
              <Icon name={iconButton.icon} size='32' />
            </IconButton>
          ))}
        </div>
      )}
    </div>
  )
}

PanelHeader.defaultProps = {
  isActive: false
}
