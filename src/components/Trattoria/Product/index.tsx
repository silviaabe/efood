import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../../store/reducers/cart'

import fechar from '../../../assets/images/fechar.png'
import * as S from './styles'

interface Prato {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

interface ModalState {
  isVisible: boolean
  type: 'image'
  url: string
}

interface Props {
  prato: Prato
}

const Product = ({ prato }: Props) => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const [modalEstaAberto, setModalEstaAberto] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
    setModalEstaAberto({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <S.Card>
        <div>
          <img src={prato.foto} alt={prato.nome} />
        </div>
        <S.Titulo>{prato.nome}</S.Titulo>
        <S.Description>{prato.descricao}</S.Description>
        <S.Button
          onClick={() => {
            setModalEstaAberto({
              isVisible: true,
              type: 'image',
              url: ''
            })
          }}
        >
          Mais detalhes
        </S.Button>
      </S.Card>
      <S.Modal className={modalEstaAberto.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <header>
            <img
              src={fechar}
              className="close-button"
              alt="Fechar"
              onClick={() => {
                setModalEstaAberto({
                  isVisible: false,
                  type: 'image',
                  url: ''
                })
              }}
            />
          </header>
          <img src={prato.foto} alt={prato.nome} />
          <div>
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <p> Serve: {prato.porcao}</p>
            <S.AddButton onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(prato.preco)}
            </S.AddButton>
          </div>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            setModalEstaAberto({
              isVisible: false,
              type: 'image',
              url: ''
            })
          }}
        ></div>
      </S.Modal>
    </>
  )
}

export default Product
