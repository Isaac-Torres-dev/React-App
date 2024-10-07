import { ReactNode } from 'react'
import styles from './Button.module.css'
import styled from 'styled-components'

const Btn = styled.button`
  background-color: red;
  padding: 15px 20px;
`

type Props = {
  children: ReactNode
  isLoading?: boolean
  onClick: () => void
}

console.log(styles)

function Buttom({ children, isLoading, onClick }: Props) {
  // const className = [
  //   `btn btn-${isLoading ? 'secondary' : 'primary'}`,
  //   styles.button,
  // ].join(' ')

  return (
    <Btn
      onClick={onClick}
      disabled={isLoading}
      type='button'
      // className={className}
      // className={[styles.button, styles.padded].join(' ')}
    >
      {isLoading ? 'Cargando...' : children}
    </Btn>
  )
}

export default Buttom
