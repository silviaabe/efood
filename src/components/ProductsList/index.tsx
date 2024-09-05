import Dish from '../../models/Dish'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  dishes: Dish[]
}

const ProductsList = ({ dishes }: Props) => (
  <Container>
    <List>
      {dishes.map((dish) => (
        <Product
          key={dish.id}
          image={dish.image}
          infos={dish.infos}
          title={dish.title}
          grade={dish.grade}
          description={dish.description}
        />
      ))}
    </List>
  </Container>
)

export default ProductsList
