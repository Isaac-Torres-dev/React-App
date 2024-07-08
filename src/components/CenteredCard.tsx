import { ReactNode } from 'react'

type Props = { children: ReactNode }

const CenteredCard = ({ children }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Asegúrate de que el contenedor ocupe toda la altura de la ventana
      }}
    >
      <div>{children}</div>
    </div>
  )
}

export default CenteredCard
