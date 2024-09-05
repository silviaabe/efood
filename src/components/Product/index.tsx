import Button from '../Button'
import {
  Card,
  Conjunto,
  Descricao,
  Estrela,
  Informacoes,
  Infos,
  Tit_Conj
} from './styles'
import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tag'

type Props = {
  image: string
  infos: string[]
  title: string
  grade: string
  description: string
}

const Product = ({ image, infos, title, grade, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Informacoes>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Informacoes>
    <Infos>
      <Tit_Conj>
        <h3>{title}</h3>
        <Conjunto>
          <h3>{grade}</h3>
          <Estrela src={estrela} />
        </Conjunto>
      </Tit_Conj>
      <Descricao>{description}</Descricao>
      <Button
        type="link"
        to="/profileItalian"
        title="Clique aqui para saber mais"
      >
        Saiba mais
      </Button>
    </Infos>
  </Card>
)

export default Product
