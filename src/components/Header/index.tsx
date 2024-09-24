import { Link } from 'react-router-dom'
import { Imagem, CartButton } from './styles'

import bannerImg from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <div className="restaurante">
          <Link to="/">Restaurantes</Link>
        </div>
        <div>
          <Link to="/">
            <img src={logo} alt="EFOOD" />
          </Link>
        </div>
        <div className="carrinho">
          <CartButton onClick={openCart}>
            {items.length} produto(s) no carrinho
          </CartButton>
        </div>
      </div>
    </Imagem>
  )
}

export default Header
