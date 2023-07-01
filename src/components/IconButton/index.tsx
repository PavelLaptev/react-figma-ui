import React, {
  ReactNode,
  MouseEventHandler,
  useCallback,
  KeyboardEvent
} from 'react'

import styles from './styles.module.css'

export type IconButtonProps = {
  children: ReactNode
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  propagateEscapeKeyDown?: boolean
}

export const IconButton = (props: IconButtonProps) => {
  const handleKeyDown = useCallback(
    function (event: KeyboardEvent<HTMLButtonElement>): void {
      if (event.key !== 'Escape') {
        return
      }
      if (props.propagateEscapeKeyDown === false) {
        event.stopPropagation()
      }
      event.currentTarget.blur()
    },
    [props.propagateEscapeKeyDown]
  )

  return (
    <button
      className={styles.iconButton}
      disabled={props.disabled === true}
      onClick={props.disabled === true ? undefined : props.onClick}
      onKeyDown={props.disabled === true ? undefined : handleKeyDown}
      tabIndex={props.disabled === true ? -1 : 0}
    >
      {props.children}
    </button>
  )
}
