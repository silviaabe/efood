import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import RestaurantsList from '../../components/RestaurantsList'

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
  const [listaRestaurante, setListaRestaurante] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setListaRestaurante(res))
  }, [])

  return (
    <>
      <Banner />
      <RestaurantsList restaurants={listaRestaurante} />
    </>
  )
}

export default Home
