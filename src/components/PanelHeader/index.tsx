import React, { ReactNode } from 'react'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export type PanelHeaderProps = {
  className?: string
  style?: React.CSSProperties
}

export const PanelHeader = (props: PanelHeaderProps) => {
  return (
    <span
      className={joinClassNames(styles.panelHeader, props.className)}
      style={{
        ...props.style
      }}
    ></span>
  )
}

PanelHeader.defaultProps = {}
