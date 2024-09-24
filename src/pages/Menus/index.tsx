import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import BannerRestaurant from '../../components/BannerRestaurant'
import MenuCardapio from '../../components/Menu'
import { useGetRestaurantQuery } from '../../services/api'

const Menus = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <BannerRestaurant restaurant={restaurant} />
      <MenuCardapio menus={restaurant.cardapio} />
    </>
  )
}

export default Menus
