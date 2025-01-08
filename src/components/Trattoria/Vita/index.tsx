import { Restbar } from './styles'

interface VitaProps {
  tipo: string
  nome: string
  capa: string
}

const Vita = ({ tipo, nome, capa }: VitaProps) => (
  <Restbar style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <h3>{tipo}</h3>
      <h2>{nome}</h2>
    </div>
  </Restbar>
)

export default Vita
