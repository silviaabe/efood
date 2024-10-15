import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import bannerImg from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'

import { openCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openToCart = () => {
    dispatch(openCart())
  }

  return (
    <S.Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <div className="restaurant">
          <Link
            title="Clique aqui para ir para a página dos restaurantes"
            to="/"
          >
            Restaurantes
          </Link>
        </div>
        <div>
          <Link title="Clique aqui para ir para a página inicial" to="/">
            <img src={logo} alt="EFOOD" />
          </Link>
        </div>
        <div className="cart">
          <S.CartButton
            title="Clique aqui para ir para o carrinho"
            role="button"
            onClick={openToCart}
          >
            {items.length} produto(s) no carrinho
          </S.CartButton>
        </div>
      </div>
    </S.Image>
  )
}

export default Header
