import { Link } from 'react-router-dom'
import { Imagem, LinkCart } from './styles'

import bannerImg from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Link to="/">Restaurantes</Link>
      </div>
      <div>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
      </div>
      <div>
        <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
      </div>
    </div>
  </Imagem>
)

export default Header
