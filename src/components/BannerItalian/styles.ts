import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  font-size: 32px;
  color: ${cores.branco};

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 24px 0 32px;
  }
`