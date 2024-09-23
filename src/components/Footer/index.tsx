import { Container, Links } from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../Banner/styles'

const Footer = () => (
  <Container>
    <Link to="/">
      <Logo src={logo} alt="EFOOD" />
    </Link>
    <Links>
      <li>
        <a href="https://instagram.com">
          <img src={instagram} alt="" />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <img src={facebook} alt="" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <img src={twitter} alt="" />
        </a>
      </li>
    </Links>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Container>
)

export default Footer
