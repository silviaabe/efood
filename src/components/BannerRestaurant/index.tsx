import { Image } from './styles'

type Props = {
  restaurant: Restaurant
}

const BannerRestaurant = ({ restaurant }: Props) => (
  <Image
    style={{
      backgroundImage: `url(${restaurant.capa || 'fallback-image-url.jpg'})`
    }}
  >
    <div className="container">
      <h3>{restaurant.tipo}</h3>
      <h2>{restaurant.titulo}</h2>
    </div>
  </Image>
)

export default BannerRestaurant
