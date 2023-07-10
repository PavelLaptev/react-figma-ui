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
  hasBackButton?: boolean
  iconButtons?: IconButtonProps[]
}

const backIcon = (
  <svg
    className={styles.backIcon}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
  >
    <path d='M14.9141 7.708L14.2061 7L9.00006 11.999L14.2061 16.9986L14.9141 16.2906L10.4141 11.999L14.9141 7.708Z' />
  </svg>
)

export const PanelHeader = React.forwardRef<HTMLDivElement, PanelHeaderProps>(
  (props, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation()
      props.onClick && props.onClick()
    }

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
        onClick={handleClick}
      >
        {props.hasBackButton && backIcon}
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
