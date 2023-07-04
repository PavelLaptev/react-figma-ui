import React from 'react'

import { IconButton, IconButtonProps } from '../IconButton'
import { Text } from '../Text'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export type PanelHeaderProps = {
  className?: string
  style?: React.CSSProperties
  title?: string
  isActive?: boolean
  onClick?: () => void
  iconButtons?: IconButtonProps[]
}

export const PanelHeader = React.forwardRef<HTMLDivElement, PanelHeaderProps>(
  (props, ref) => {
    return (
      <div
        className={joinClassNames(
          styles.panelHeader,
          props.className,
          props.isActive && styles.isActive
        )}
        style={{
          ...props.style
        }}
        ref={ref}
        onClick={props.onClick}
      >
        <Text className={styles.title} fontSize={11} fontWeight='bold'>
          {props.title}
        </Text>
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
      </div>
    )
  }
)

PanelHeader.displayName = 'PanelHeader'

PanelHeader.defaultProps = {
  isActive: false
}
