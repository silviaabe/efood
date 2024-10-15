import Banner from '../../components/Banner'
import RestaurantsList from '../../components/RestaurantsList'

import { useGetFeaturedRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: featuredRestaurant, isLoading } =
    useGetFeaturedRestaurantQuery()

  return (
    <>
      <Banner />
      <RestaurantsList isLoading={isLoading} restaurants={featuredRestaurant} />
    </>
  )
}

export default Home
