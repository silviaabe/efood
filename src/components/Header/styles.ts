import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 186px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    padding: 80px 0 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .restaurante {
      width: 200px;
    }

    .carrinho {
      width: 200px;
    }
  }

  a {
    color: ${cores.rosaEscuro};
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
