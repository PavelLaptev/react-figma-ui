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

const defaultProps = {
  align: 'left' as TextAlignType,
  fontSize: 11,
  fontWeight: 'regular' as fontWeightType
}

export const Text = (props: TextProps) => {
  props = { ...defaultProps, ...props }
  
  return (
    <span
      className={joinClassNames(
        styles.text,
        styles[props.align],
        styles[props.fontWeight],
        props.className
      )}
      style={{
        ...props.style,
        fontSize: `${props.fontSize}px`
      }}
    >
      {props.children}
    </span>
  )
}
