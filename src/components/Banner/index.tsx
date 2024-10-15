import { Link } from 'react-router-dom'

import bannerImg from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'

import * as S from './styles'

const Banner = () => (
  <S.Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <S.Header className="container">
      <Link title="Clique aqui para ir para a página inicial" to="/">
        <S.Logo src={logo} alt="EFOOD" />
      </Link>
      <S.Title>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </S.Title>
    </S.Header>
  </S.Image>
)

export default Banner
