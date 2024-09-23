import { Restaurant } from '../../pages/Home'

import { Imagem } from './styles'

type Props = {
  restaurant: Restaurant
}

const BannerRestaurant = ({ restaurant }: Props) => (
  <Imagem
    style={{
      backgroundImage: `url(${restaurant.capa || 'fallback-image-url.jpg'})`
    }}
  >
    <div className="container">
      <h3>{restaurant.tipo}</h3>
      <h2>{restaurant.titulo}</h2>
    </div>
  </Imagem>
)

export default BannerRestaurant
