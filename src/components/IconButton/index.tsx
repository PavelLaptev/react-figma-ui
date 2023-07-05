import React, { ReactNode, MouseEventHandler } from 'react'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export type IconButtonProps = {
  className?: string
  children: ReactNode
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  isActive?: boolean
  propagateEscapeKeyDown?: boolean
}

export const IconButton = (props: IconButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    props.onClick && props.onClick(event)
  }

  return (
    <button
      className={joinClassNames(
        styles.iconButton,
        props.className,
        props.isActive && styles.isActive
      )}
      disabled={props.disabled}
      onClick={props.disabled ? undefined : handleClick}
      tabIndex={props.disabled ? -1 : 0}
    >
      {props.children}
    </button>
  )
}
