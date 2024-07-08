import { ReactNode } from 'react'
import styles from './Button.module.css'

type Props = {
  children: ReactNode
  isLoading?: boolean
  onClick: () => void
}

console.log(styles)

function Buttom({ children, isLoading, onClick }: Props) {
  const className = [
    `btn btn-${isLoading ? 'secondary' : 'primary'}`,
    styles.button,
  ].join(' ')

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type='button'
      className={className}
      // className={[styles.button, styles.padded].join(' ')}
    >
      {isLoading ? 'Cargando...' : children}
    </button>
  )
}

export default Buttom
