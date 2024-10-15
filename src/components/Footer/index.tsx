import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

import { Logo } from '../Banner/styles'
import * as S from './styles'

const Footer = () => (
  <S.Container>
    <Link title="Clique aqui para ir para a página inicial" to="/">
      <Logo src={logo} alt="EFOOD" />
    </Link>
    <S.Links>
      <li>
        <a title="Instagram" href="https://instagram.com">
          <img src={instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a title="Facebook" href="https://facebook.com">
          <img src={facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a title="Twitter" href="https://twitter.com">
          <img src={twitter} alt="Twitter" />
        </a>
      </li>
    </S.Links>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </p>
  </S.Container>
)

export default Footer
