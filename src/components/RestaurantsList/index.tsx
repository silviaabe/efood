import Loader from '../Loader'
import Product from '../Restaurant'
import { List } from './styles'

export type Props = {
  restaurants?: Restaurant[]
  isLoading: boolean
}

const RestaurantsList = ({ restaurants, isLoading }: Props) => {
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

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <List>
        {restaurants &&
          restaurants.map((restaurant) => (
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
