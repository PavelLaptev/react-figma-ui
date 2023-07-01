import React from 'react'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface PanelProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  hasLeftRightPadding?: boolean
  hasTopBottomPadding?: boolean
}

export const Panel = (props: PanelProps) => {
  return (
    <div
      className={joinClassNames(
        styles.panel,
        props.className,
        props.hasLeftRightPadding && styles.leftRightPadding,
        props.hasTopBottomPadding && styles.topBottomPadding
      )}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

Panel.defaultProps = {
  hasLeftRightPadding: true,
  hasTopBottomPadding: true
}
