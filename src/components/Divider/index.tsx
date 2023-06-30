import React from 'react'

import { joinClassNames } from '../../utils/joinClassNames'
import styles from './styles.module.css'

export interface DividerProps {
  className?: string
}

export const Divider = () => {
  return <hr className={joinClassNames(styles.divider)} />
}
