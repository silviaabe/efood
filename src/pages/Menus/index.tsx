import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import BannerRestaurant from '../../components/BannerRestaurant'
import MenuPage from '../../components/Menu'
import Loader from '../../components/Loader'

import { useGetRestaurantQuery } from '../../services/api'

type RestaurantParams = {
  id: string
}

const Menus = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant } = useGetRestaurantQuery(id)

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <BannerRestaurant restaurant={restaurant} />
      <MenuPage menus={restaurant.cardapio} />
    </>
  )
}

export default Menus
