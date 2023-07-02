import React from 'react'

import { OptionProps } from '../Overlay'

import { Overlay } from '../Overlay'
import { Text } from '../Text'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface PanelProps {
  className?: string
  sections: OptionProps[][]
}

export const Dropdown = (props: PanelProps) => {
  return (
    <div className={joinClassNames(styles.props.className)}>
      <Overlay sections={props.sections} />
      <div className={styles.dropdown}>
        <Text>Dropdown</Text>
        <svg
          width='8'
          height='7'
          viewBox='0 0 8 7'
          xmlns='http://www.w3.org/2000/svg'
          className={styles.dropdownIcon}
        >
          <path
            d='M3.646 5.354l-3-3 .708-.708L4 4.293l2.646-2.647.708.708-3 3L4 5.707l-.354-.353z'
            fill-rule='evenodd'
            fill-opacity='1'
            stroke='none'
          ></path>
        </svg>
      </div>
    </div>
  )
}

Dropdown.defaultProps = {}
