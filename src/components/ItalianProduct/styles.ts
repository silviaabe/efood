import { styled } from 'styled-components'
import { colors } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${colors.darkPink};
  padding: 8px;
  margin-bottom: 32px;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.5s ease;
    cursor: pointer;
  }

  ${ButtonLink} {
    display: block;
    background-color: ${colors.lightPink};
    color: ${colors.darkPink};
    width: 100%;
    text-align: center;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  color: ${colors.lightPink};
  margin: 8px 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  color: ${colors.lightPink};
`
