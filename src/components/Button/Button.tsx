import { ReactNode } from 'react'
import { cx } from 'styles'
import styles from './button.module.scss'

interface Props {
  children: ReactNode
  onClick: () => void
  size?: 'big' | 'small'
}

const Button = ({ children, onClick, size }: Props) => {
  return (
    <button type='button' onClick={onClick} className={cx(size && styles[size])}>
      {children}
    </button>
  )
}

export default Button
