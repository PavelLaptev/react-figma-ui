import React from 'react'
import styles from './styles.module.scss'

export interface ButtonIProps {
  className?: string
}

const Button = (props: ButtonIProps) => {
  return <button>hello</button>
}

Button.defaultProps = {
  className: ''
} as Partial<ButtonIProps>

export default Button
