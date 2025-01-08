import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductsList from '../../components/Trattoria/ProductsList'
import Header from '../../components/Trattoria/Header'
import Vita from '../../components/Trattoria/Vita'

export interface Prato {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

interface Restaurante {
  id: number
  titulo: string
  descricao: string
  capa: string
  cardapio: Prato[]
  tipo: string // Adicione o campo "tipo" à interface do Restaurante
}

const Trattoria = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    if (id) {
      fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((res: Restaurante[]) => {
          // Encontre o restaurante com o ID correspondente
          const restauranteSelecionado = res.find(
            (rest: Restaurante) => rest.id === parseInt(id, 10)
          )

          if (restauranteSelecionado) {
            setRestaurante(restauranteSelecionado)
          }
        })
    }
  }, [id])

  return (
    <>
      <Header />
      {restaurante && (
        <>
          <Vita
            tipo={restaurante.tipo}
            nome={restaurante.titulo}
            capa={restaurante.capa}
          />
          <ProductsList pratos={restaurante.cardapio || []} />
        </>
      )}
    </>
  )
}

export default Trattoria
