import {
  Card,
  Conjunto,
  Descricao,
  Estrela,
  Informacoes,
  Infos,
  Tit_Conj
} from './styles'
import Tag from '../Tag'
import estrela from '../../assets/images/estrela.svg'
import Button from '../Button'
import { Restaurant } from '../../pages/Home'

type Props = {
  id: number
  titulo: string
  infos: string[]
  avaliacao: string
  descricao: string
  capa: string
  restaurant: Restaurant
}

const Product = ({ id, titulo, infos, avaliacao, descricao, capa }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 248) {
      return descricao.slice(0, 245) + '...'
    }
    return descricao
  }

  return (
    <Card to={`/restaurantes/${id}`}>
      <img src={capa} alt={titulo} />
      <Informacoes>
        {infos.map((info, index) => (
          <Tag key={index}>
            {typeof info === 'boolean'
              ? info
                ? 'Destaque da semana'
                : ''
              : info}
          </Tag>
        ))}
      </Informacoes>
      <Infos>
        <Tit_Conj>
          <h3>{titulo}</h3>
          <Conjunto>
            <h3>{avaliacao}</h3>
            <Estrela src={estrela} />
          </Conjunto>
        </Tit_Conj>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <Button
          type="link"
          to={`/restaurantes/${id}`}
          title="Clique aqui para saber mais"
        >
          Saiba mais
        </Button>
      </Infos>
    </Card>
  )
}

export default Product
