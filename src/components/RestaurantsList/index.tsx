import { Restaurant } from '../../pages/Home'
import Product from '../Restaurant'
import { List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurant: Restaurant) => {
    const tags = []

    if (restaurant.destacado) {
      tags.push(restaurant.destacado)
    }

    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }

    return tags
  }

  return (
    <div>
      <List className="container">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Product
              id={restaurant.id}
              titulo={restaurant.titulo}
              infos={getRestaurantTags(restaurant)}
              avaliacao={restaurant.avaliacao}
              descricao={restaurant.descricao}
              capa={restaurant.capa}
              restaurant={restaurant}
            />
          </li>
        ))}
      </List>
    </div>
  )
}

export default RestaurantsList
