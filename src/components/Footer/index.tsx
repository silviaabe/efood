import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import insta from '../../assets/images/insta.png'
import face from '../../assets/images/face.png'
import twit from '../../assets/images/twit.png'

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <Link title="Clique aqui para acessar nosso site principal" to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
      </S.FooterSection>
      <S.FooterSection>
        <Link title="Clique aqui para acessar nosso Instagram" to="/">
          <img src={insta} alt="Instagram" />
        </Link>
        <Link
          title="Clique aqui para acessar nosso Facebook"
          to="/"
          className="links"
        >
          <img src={face} alt="Facebook" />
        </Link>
        <Link
          title="Clique aqui para acessar nosso Twitter"
          to="/"
          className="links"
        >
          <img src={twit} alt="Twitter" />
        </Link>
      </S.FooterSection>
      <S.Description>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </S.Description>
    </div>
  </S.Container>
)

export default Footer
