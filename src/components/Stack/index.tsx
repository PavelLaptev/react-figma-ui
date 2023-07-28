import React from 'react'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface StackProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  gap?: number | string
  direction?: 'row' | 'column'
  hasLeftRightPadding?: boolean
  hasTopBottomPadding?: boolean
  hasLeftPadding?: boolean
  hasRightPadding?: boolean
  hasTopPadding?: boolean
  hasBottomPadding?: boolean
  onClick?: () => void
}

export const Stack = (props: StackProps) => {
  return (
    <div
      className={joinClassNames(
        styles.stack,
        props.className,
        props.hasLeftRightPadding && styles.leftRightPadding,
        props.hasTopBottomPadding && styles.topBottomPadding,
        props.hasLeftPadding && styles.leftPadding,
        props.hasRightPadding && styles.rightPadding,
        props.hasTopPadding && styles.topPadding,
        props.hasBottomPadding && styles.bottomPadding
      )}
      onClick={props.onClick}
      style={{
        ...props.style,
        gap: props.gap,
        flexDirection: props.direction
      }}
    >
      {props.children}
    </div>
  )
}

Stack.defaultProps = {
  gap: 0,
  direction: 'column',
  hasLeftRightPadding: true,
  hasTopBottomPadding: false
}
