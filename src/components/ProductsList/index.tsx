import { useState, useEffect } from 'react'
import Product from '../Product'

import * as S from './styles'

type Restaurante = {
  id: number
  titulo: string
  descricao: string
  tipo: string
  avaliacao: number
  capa: string
}

const ProductsList = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possivel buscar os dados da API')
        }
        return response.json()
      })
      .then((data) => {
        setRestaurantes(data)
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API', error)
      })
  }, [])

  return (
    <S.Container>
      <div className="container">
        <S.List>
          {restaurantes.map((restaurante, index) => (
            <Product
              key={restaurante.id}
              button="Saiba Mais"
              description={restaurante.descricao}
              image={restaurante.capa}
              infos={[restaurante.tipo]}
              title={restaurante.titulo}
              notas={restaurante.avaliacao}
              isDestaque={index === 0}
              id={restaurante.id}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
