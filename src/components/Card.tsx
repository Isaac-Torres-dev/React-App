import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function Card({ children }: Props) {
  //En este componente estamos aplicando una intefaz a la propiedades que se pasaran como parametros
  return (
    <div className='card' style={{ width: '350px' }}>
      <div className='card-body'>
        {/* <CardBody /> */}
        {children}
      </div>
    </div>
  )
}
interface CardBodyProps {
  title: string
  text?: string
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props
  return (
    <>
      <h5 className='card-title'>{title}</h5>
      <p className='card-text'>{text}</p>
    </>
  )
}

export default Card
