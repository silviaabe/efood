import DishItalian from '../../models/DishItalian'
import ItalianProduct from '../ItalianProduct'
import { List, Modal, ModalContent } from './styles'

import pizza from '../../assets/images/pizza.png'
import fechar from '../../assets/images/fechar.png'
import Button from '../Button'
import { useState } from 'react'

export type Props = {
  dishesItalian: DishItalian[]
}

const ItalianProductsList = ({ dishesItalian }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <div className="container">
        <List onClick={() => setModalEstaAberto(true)}>
          {dishesItalian.map((dishItalian) => (
            <ItalianProduct
              key={dishItalian.id}
              image={dishItalian.image}
              title={dishItalian.title}
              description={dishItalian.description}
            />
          ))}
        </List>
      </div>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => setModalEstaAberto(false)}
            />
          </header>
          <div>
            <img src={pizza} />
          </div>
          <div>
            <h3>Pizza Marguerita</h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br />
              <br />
              Serve: de 2 a 3 pessoas
            </p>
            <Button
              type="link"
              to="/carrinho"
              title="Clique aqui para ir ao carrinho"
            >
              Adicionar ao carrinho - R$ 60,90
            </Button>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </Modal>
    </>
  )
}

export default ItalianProductsList
