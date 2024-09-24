import { useState } from 'react'

import { Card, Descricao, List, Modal, ModalContent, Titulo } from './styles'
import { Menu } from '../../pages/Home'
import Button from '../Button'

import fechar from '../../assets/images/fechar.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

const mock: Menu[] = [
  {
    foto: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//1.webp',
    preco: 69.9,
    id: 1,
    nome: 'Ravioli al Tartufo Nero',
    descricao:
      'O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana. Cada ravióli é cuidadosamente recheado com uma mistura saborosa de ricota fresca, parmesão e trufas negras raladas, proporcionando uma combinação de texturas suaves e aromas irresistíveis.',
    porcao: '1 a 2 pessoas'
  },
  {
    foto: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//2.jpg',
    preco: 56.9,
    id: 2,
    nome: 'Spaghetti alla Carbonara',
    descricao:
      'O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino. Um prato saboroso e reconfortante que leva você diretamente para a Itália.',
    porcao: '1 a 2 pessoas'
  },
  {
    foto: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//3.jpg',
    preco: 74.9,
    id: 3,
    nome: 'Risotto ai Funghi Porcini',
    descricao:
      'O Risotto ai Funghi Porcini é uma iguaria italiana feita com arroz Arborio de alta qualidade e cogumelos porcini secos, que são reidratados para liberar seu sabor intenso e terroso. O arroz é cozido lentamente em um caldo de legumes, com vinho branco e queijo parmesão, resultando em um risoto cremoso e delicioso.',
    porcao: '1 a 2 pessoas'
  },
  {
    foto: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//4.jpg',
    preco: 89.9,
    id: 4,
    nome: 'Ossobuco alla Milanese',
    descricao:
      'O Ossobuco alla Milanese é um tradicional prato italiano, originário de Milão, que consiste em um suculento pedaço de vitela cozido lentamente em um molho à base de tomate, vinho branco e legumes. O prato é acompanhado por uma porção de polenta cremosa ou risoto alla Milanese, feito com açafrão.',
    porcao: '1 a 2 pessoas'
  },
  {
    foto: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//5.jpg',
    preco: 62.9,
    id: 5,
    nome: 'Melanzane alla Parmigiana',
    descricao:
      'Melanzane alla Parmigiana é um delicioso prato à base de berinjelas, em camadas com molho de tomate caseiro, queijo muçarela e parmesão, assado até ficar dourado e borbulhante. Uma opção saborosa e reconfortante, perfeita para os amantes de legumes e queijo.',
    porcao: '1 a 2 pessoas'
  },
  {
    foto: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//6.jpg',
    preco: 84.9,
    id: 6,
    nome: 'Frutti di Mare Linguine',
    descricao:
      'O Frutti di Mare Linguine é uma verdadeira celebração dos sabores do mar, apresentando uma generosa mistura de frutos do mar frescos, como camarões, lulas, mariscos e vieiras, combinados com massa linguine al dente e um saboroso molho de tomate e vinho branco. Uma opção deliciosa para os amantes de frutos do mar.',
    porcao: '1 a 2 pessoas'
  },
  {
    foto: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//7.jpg',
    preco: 49.9,
    id: 7,
    nome: 'Insalata Caprese',
    descricao:
      'A Insalata Caprese é uma refrescante e deliciosa salada italiana, feita com tomates maduros e suculentos, fatias frescas de mozzarella di bufala, folhas de manjericão e um fio de azeite extra virgem de oliva. Uma opção leve e saborosa, perfeita como entrada ou acompanhamento.',
    porcao: '1 a 2 pessoas'
  }
]

type Props = {
  menus: Menu[]
}

interface ModalState extends Menu {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const MenuCardapio = ({ menus = [] }: Props) => {
  const dispatch = useDispatch()

  const addToCart = (menu: Menu) => {
    dispatch(add(menu))
    dispatch(open())
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

  const getDescricao = (descricao: string) => {
    if (descricao.length > 203) {
      return descricao.slice(0, 200) + '...'
    }
    return descricao
  }

  return (
    <div className="container">
      <List>
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
              <Card>
                <img src={cardapio.foto} alt={cardapio.nome} />
                <Titulo>{cardapio.nome}</Titulo>
                <Descricao>{getDescricao(cardapio.descricao)}</Descricao>
                <Button
                  type="link"
                  title="Clique aqui para adicionar ao carrinho"
                  onClick={() => {
                    addToCart(cardapio)
                  }}
                >
                  Adicionar ao carrinho
                </Button>
              </Card>
            </div>
          ))
        ) : (
          <p>Nenhum item disponível no momento</p>
        )}
      </List>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent>
          <header>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
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
              {`Adicionar ao carrinho - ${formataPreco(modal.preco)}`}
            </Button>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </div>
  )
}

export default MenuCardapio
