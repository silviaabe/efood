import { Link } from 'react-router-dom'
import { Cabecalho, Imagem, Logo, Titulo } from './styles'

import bannerImg from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Cabecalho>
      <Link to="/">
        <Logo src={logo} alt="EFOOD" />
      </Link>
      <Titulo>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Titulo>
    </Cabecalho>
  </Imagem>
)

export default Banner
