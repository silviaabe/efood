import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.darkPink};
  position: relative;
  margin-bottom: 48px;

  .linkProfile {
    text-decoration: none;
    color: ${colors.darkPink};
  }
`

export const Infos = styled.div`
  padding: 8px;
`

export const Tit_Conj = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`

export const Conjunto = styled.div`
  display: flex;
`

export const Estrela = styled.img`
  margin-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
`

export const Informacoes = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }
`
