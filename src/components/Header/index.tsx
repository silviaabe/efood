import { Link } from 'react-router-dom'

import * as S from './styles'

import headerImg from '../../assets/images/background.png'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <S.Headerbar style={{ backgroundImage: `url(${headerImg})` }}>
    <div className="container">
      <Link title="Clique aqui para acessar nosso site principal" to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
    </div>
    <S.Text>
      Viva experiências gastronômicas
      <br /> no conforto da sua casa
    </S.Text>
  </S.Headerbar>
)

export default Header
