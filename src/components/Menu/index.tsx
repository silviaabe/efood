import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '../Button'

import closeIcon from '../../assets/images/fechar.png'

import { addCart, openCart } from '../../store/reducers/cart'

import * as S from './styles'
import { parseToBrl } from '../../utils'

type Props = {
  menus: Menu[]
}

interface ModalState extends Menu {
  isVisible: boolean
}

const MenuPage = ({ menus = [] }: Props) => {
  const dispatch = useDispatch()

  const addToCart = (menu: Menu) => {
    dispatch(addCart(menu))
    dispatch(openCart())
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    id: 0,
    foto: '',
    preco: 0,
    nome: '',
    descricao: '',
    porcao: ''
  })

  const closeModal = () => {
    setModal((prevState) => ({
      ...prevState,
      isVisible: false
    }))
  }

  const getDescription = (text = '') => {
    if (text.length > 203) {
      return text.slice(0, 200) + '...'
    }
    return text
  }

  return (
    <div className="container">
      <S.List>
        {menus.length > 0 ? (
          menus.map((cardapio) => (
            <div
              onClick={() => {
                setModal({
                  isVisible: true,
                  id: cardapio.id,
                  foto: cardapio.foto,
                  preco: cardapio.preco,
                  nome: cardapio.nome,
                  descricao: cardapio.descricao,
                  porcao: cardapio.porcao
                })
              }}
              key={cardapio.id}
            >
              <S.Card
                title={`Clique aqui para ver mais detalhes do prato ${cardapio.nome}`}
              >
                <img src={cardapio.foto} alt={cardapio.nome} />
                <S.Title>{cardapio.nome}</S.Title>
                <S.Description>
                  {getDescription(cardapio.descricao)}
                </S.Description>
                <Button
                  type="link"
                  title="Clique aqui para adicionar ao carrinho"
                  onClick={() => {
                    addToCart(cardapio)
                  }}
                >
                  Adicionar ao carrinho
                </Button>
              </S.Card>
            </div>
          ))
        ) : (
          <p>Nenhum item disponível no momento</p>
        )}
      </S.List>
      <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <S.ModalContent>
          <header>
            <img src={closeIcon} alt="Ícone de fechar" onClick={closeModal} />
          </header>
          <div>
            <img src={modal.foto} alt={modal.nome} />
          </div>
          <div>
            <h3>{modal.nome}</h3>
            <p>{modal.descricao}</p>
            <p>Porção: {modal.porcao}</p>
            <Button
              aria-label="Adicionar ao carrinho"
              type="button"
              title="Clique aqui para adicionar ao carrinho"
              onClick={() => addToCart(modal)}
            >
              {`Adicionar ao carrinho - ${parseToBrl(modal.preco)}`}
            </Button>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </div>
  )
}

export default MenuPage
