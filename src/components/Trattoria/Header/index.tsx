import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../../store'
import { open } from '../../../store/reducers/cart'

import * as S from './styles'

import headerImg from '../../../assets/images/background.png'
import logo from '../../../assets/images/logo.svg'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    if (items.length > 0) {
      dispatch(open())
    } else {
      alert('Adicione pelo menos 1 item ao carrinho.')
    }
  }

  return (
    <S.Headerbar style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
      </div>
      <div className="textos">
        <a href="/">Restaurantes</a>
        <S.CartButton onClick={openCart}>
          {items.length} Produto(s) no carrinho
        </S.CartButton>
      </div>
    </S.Headerbar>
  )
}

export default Header
