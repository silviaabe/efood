import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'

import { RootReducer } from '../../store'
import { closeCart, removeCart } from '../../store/reducers/cart'

import closeIcon from '../../assets/images/fechar.png'

import * as S from './styles'
import { getTotalPrice, parseToBrl } from '../../utils'

const Cart = () => {
  const { cartIsOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cartClose = () => {
    dispatch(closeCart())
  }

  const removeItem = (id: number) => {
    dispatch(removeCart(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    dispatch(closeCart())
  }

  return (
    <S.CartContainer className={cartIsOpen ? 'is-open' : ''}>
      <S.Overlay onClick={cartClose} />
      <S.Sidebar>
        <header>
          <img src={closeIcon} alt="Ícone de fechar" onClick={cartClose} />
        </header>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{parseToBrl(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.Total>
              <div>Valor Total</div>
              <div>{parseToBrl(getTotalPrice(items))}</div>
            </S.Total>
            <Button
              title="Clique aqui para continuar com a entrega"
              type="button"
              onClick={goToCheckout}
              variant="secondary"
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um prato para continuar
            com a compra.
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
