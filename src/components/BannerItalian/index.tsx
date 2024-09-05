import { Imagem } from './styles'

import macarrao from '../../assets/images/macarrao.png'

const BannerProfile = () => (
  <Imagem style={{ backgroundImage: `url(${macarrao})` }}>
    <div className="container">
      <h3>Italiana</h3>
      <h2>La Dolce Vita Trattoria</h2>
    </div>
  </Imagem>
)

export default BannerProfile
