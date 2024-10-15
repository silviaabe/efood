import Tag from '../Tag'
import Button from '../Button'

import star from '../../assets/images/estrela.svg'

import * as S from './styles'

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
  const getDescription = (text = '') => {
    if (text.length > 248) {
      return text.slice(0, 245) + '...'
    }
    return text
  }

  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes do restaurante: ${titulo}`}
      to={`/restaurantes/${id}`}
    >
      <img src={capa} alt={titulo} />
      <S.Informations>
        {infos.map((info, index) => (
          <Tag key={index}>
            {typeof info === 'boolean'
              ? info
                ? 'Destaque da semana'
                : ''
              : info}
          </Tag>
        ))}
      </S.Informations>
      <S.Infos>
        <S.SetTitles>
          <h3>{titulo}</h3>
          <S.Set>
            <h3>{avaliacao}</h3>
            <S.Star src={star} />
          </S.Set>
        </S.SetTitles>
        <S.Description>{getDescription(descricao)}</S.Description>
        <Button
          type="link"
          to={`/restaurantes/${id}`}
          title="Clique aqui para saber mais"
        >
          Saiba mais
        </Button>
      </S.Infos>
    </S.Card>
  )
}

export default Product
