import DishItalian from '../../models/DishItalian'
import ItalianProduct from '../ItalianProduct'
import { List } from './styles'

export type Props = {
  dishesItalian: DishItalian[]
}

const ItalianProductsList = ({ dishesItalian }: Props) => (
  <div className="container">
    <List>
      {dishesItalian.map((dishItalian) => (
        <ItalianProduct
          key={dishItalian.id}
          image={dishItalian.image}
          title={dishItalian.title}
          description={dishItalian.description}
        />
      ))}
    </List>
  </div>
)

export default ItalianProductsList
