import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Restaurant } from '../Home'

import Header from '../../components/Header'
import BannerRestaurant from '../../components/BannerRestaurant'
import MenuCardapio from '../../components/Menu'

const Menus = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
      .catch(() => console.error('Failed to fetch restaurant data.'))
  }, [id])

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
