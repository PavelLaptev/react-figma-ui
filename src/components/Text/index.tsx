import React, { ReactNode } from 'react'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export type TextProps = {
  className?: string
  style?: React.CSSProperties
  align?: TextAlignType
  children: ReactNode
  fontSize?: number
  fontWeight?: fontWeightType
}

export type fontWeightType = 'regular' | 'bold'

type TextAlignType = 'left' | 'center' | 'right'

export const Text = (props: TextProps) => {
  return (
    <span
      className={joinClassNames(
        styles.text,
        styles[props.align],
        props.className
      )}
      style={{
        ...props.style,
        fontSize: `${props.fontSize}px`,
        fontWeight: props.fontWeight === 'bold' ? styles.bold : styles.regular
      }}
    >
      {props.children}
    </span>
  )
}

Text.defaultProps = {
  align: 'left' as TextAlignType,
  fontSize: 11,
  fontWeight: 'regular' as fontWeightType
}
