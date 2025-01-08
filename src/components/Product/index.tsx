import Tag from '../Tag'
import Button from '../Button'

import * as S from './styles'

import estrela from '../../assets/images/star_favorite.png'

type Props = {
  title: string
  button: string
  description: string
  infos: string[]
  image: string
  notas: number
  isDestaque: boolean
  id: number
}

const Product = ({
  title,
  button,
  description,
  infos,
  image,
  notas,
  isDestaque,
  id
}: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.Infos>
      {isDestaque && <Tag>Destaque da semana</Tag>}
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </S.Infos>
    <S.TitleDiv>
      <S.Title>{title}</S.Title>
      <div className="display">
        <S.Notes>{notas}</S.Notes>
        <img src={estrela} alt="Estrela" />
      </div>
    </S.TitleDiv>
    <S.Description>{description}</S.Description>
    <Button
      type="link"
      to={`/restaurantes/${id}`}
      title="Conheça nosso restaurante"
    >
      {button}
    </Button>
  </S.Card>
)

export default Product
