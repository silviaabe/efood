import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Dish from '../../models/Dish'

import japa from '../../assets/images/japa.png'
import macarrao from '../../assets/images/macarrao.png'

const listagem: Dish[] = [
  {
    id: 1,
    image: japa,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    grade: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList dishes={listagem} />
  </>
)

export default Home
