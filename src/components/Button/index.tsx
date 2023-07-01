import React, { MouseEventHandler, useCallback, KeyboardEvent } from 'react'

import { LoadingIndicator } from '../LoadingIndicator'
import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface ButtonProps {
  label: string
  danger?: boolean
  disabled?: boolean
  fullWidth?: boolean
  loading?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  propagateEscapeKeyDown?: boolean
  secondary?: boolean
}

export const Button = (props: ButtonProps) => {
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
    <div
      className={joinClassNames(
        styles.button,
        props.secondary === true ? styles.secondary : styles.default,
        props.danger === true ? styles.danger : null,
        props.fullWidth === true ? styles.fullWidth : null,
        props.disabled === true ? styles.disabled : null,
        props.loading === true ? styles.loading : null
      )}
    >
      {props.loading === true ? (
        <div className={styles.loadingIndicator}>
          <LoadingIndicator />
        </div>
      ) : null}
      <button
        disabled={props.disabled === true}
        onClick={
          props.disabled === true || props.loading === true
            ? undefined
            : props.onClick
        }
        onKeyDown={
          props.disabled === true || props.loading === true
            ? undefined
            : handleKeyDown
        }
        tabIndex={props.disabled === true ? -1 : 0}
      >
        <div className={styles.children}>
          <span>{props.label}</span>
        </div>
      </button>
    </div>
  )
}

Button.defaultProps = {
  danger: false,
  disabled: false,
  fullWidth: false,
  loading: false,
  propagateEscapeKeyDown: true,
  secondary: false
}
