import React from 'react'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

type stackDirectionType = 'row' | 'column'

export interface StackProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  gap?: number | string
  direction?: stackDirectionType
  hasLeftRightPadding?: boolean
  hasTopBottomPadding?: boolean
  hasLeftPadding?: boolean
  hasRightPadding?: boolean
  hasTopPadding?: boolean
  hasBottomPadding?: boolean
  onClick?: () => void
}

const defaultProps = {
  gap: 0,
  direction: 'column' as stackDirectionType,
  hasLeftRightPadding: true,
  hasTopBottomPadding: false
}


export const Stack = (props: StackProps) => {
  props = { ...defaultProps, ...props }

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