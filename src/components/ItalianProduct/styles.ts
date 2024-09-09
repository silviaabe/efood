import { styled } from 'styled-components'
import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.rosaEscuro};
  padding: 8px;
  margin-bottom: 32px;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.5s ease;
    cursor: pointer;
  }

  ${ButtonLink} {
    display: block;
    background-color: ${cores.rosaClaro};
    color: ${cores.rosaEscuro};
    width: 100%;
    text-align: center;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  color: ${cores.rosaClaro};
  margin: 8px 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  color: ${cores.rosaClaro};
`
