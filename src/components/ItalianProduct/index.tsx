import Button from '../Button'
import { Card, Descricao, Titulo } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const ItalianProduct = ({ image, title, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button type="link" to="/carrinho" title="Clique aqui para ir ao carrinho">
      Adicionar ao carrinho
    </Button>
  </Card>
)

export default ItalianProduct
