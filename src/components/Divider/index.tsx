import React from 'react'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface DividerProps {
  className?: string
  style?: React.CSSProperties
  isDashed?: boolean
}

export const Divider = (props: DividerProps) => {
  return (
    <div
      className={joinClassNames(
        styles.divider,
        props.isDashed && styles.dashed,
        props.className
      )}
      style={props.style}
    >
      <hr />
    </div>
  )
}
