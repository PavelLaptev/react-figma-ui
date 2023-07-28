import React from 'react'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface PanelProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  hasLeftRightPadding?: boolean
  hasTopBottomPadding?: boolean
  hasLeftPadding?: boolean
  hasRightPadding?: boolean
  hasTopPadding?: boolean
  hasBottomPadding?: boolean
  topBorder?: boolean
  bottomBorder?: boolean
}

export const Panel = (props: PanelProps) => {
  return (
    <div
      className={joinClassNames(
        styles.panel,
        props.className,
        props.hasLeftRightPadding && styles.leftRightPadding,
        props.hasTopBottomPadding && styles.topBottomPadding,

        props.hasLeftPadding && styles.leftPadding,
        props.hasRightPadding && styles.rightPadding,
        props.hasTopPadding && styles.topPadding,
        props.hasBottomPadding && styles.bottomPadding,

        props.topBorder && styles.topBorder,
        props.bottomBorder && styles.bottomBorder
      )}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

Panel.defaultProps = {
  hasLeftRightPadding: false,
  hasTopBottomPadding: true,
  topBorder: false,
  bottomBorder: true
}
