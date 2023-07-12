import React from 'react'

import icons32 from './icons32.json'
import icons16 from './icons16.json'
import { joinClassNames } from '../../utils/joinClassNames'

import styles from './styles.module.css'

export interface IconProps {
  className?: string
  style?: React.CSSProperties
  name: Icon16Type | Icon32Type
  size: '32' | '16'
  customIcon?: React.ReactNode
}

export const Icon = (props: IconProps) => {
  const getIcons = (size: '32' | '16') => {
    switch (size) {
      case '32':
        return icons32
      case '16':
        return icons16
    }
  }

  return (
    <i
      className={joinClassNames(styles.icon, props.className)}
      style={{
        width: `${props.size}px`,
        height: `${props.size}px`,
        ...props.style
      }}
    >
      {props.customIcon ? (
        props.customIcon
      ) : (
        <svg
          width={`${props.size}px`}
          height={`${props.size}px`}
          viewBox={`0 0 ${props.size} ${props.size}`}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d={(getIcons(props.size) as any)[props.name]}
          />
        </svg>
      )}
    </i>
  )
}
