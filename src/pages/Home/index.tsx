import Banner from '../../components/Banner'
import RestaurantsList from '../../components/RestaurantsList'

import { useGetFeaturedRestaurantQuery } from '../../services/api'

export interface Menu {
  id: number
  foto: string
  preco?: number
  nome: string
  descricao: string
  porcao?: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado?: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Menu[]
}

const Home = () => {
  const { data: featuredRestaurant, isLoading } =
    useGetFeaturedRestaurantQuery()

  if (featuredRestaurant) {
    return (
      <>
        <Banner />
        <RestaurantsList restaurants={featuredRestaurant} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
