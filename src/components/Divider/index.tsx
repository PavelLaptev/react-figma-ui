import React from 'react'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface DividerProps {
  className?: string
  style?: React.CSSProperties
}

export const Divider = (props: DividerProps) => {
  return (
    <hr
      className={joinClassNames(styles.divider, props.className)}
      style={props.style}
    />
  )
}
