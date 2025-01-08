import Product from '../Product'
import { Prato } from '../../../pages/Trattoria'

import * as S from './styles'

interface Props {
  pratos: Prato[]
}

const ProductsList = ({ pratos }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {pratos.map((prato) => (
          <Product key={prato.id} prato={prato} />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default ProductsList
