import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${cores.branco};
  border: 1px solid ${cores.rosaEscuro};
  position: relative;
  margin-bottom: 48px;
  text-decoration: none;
  display: block;
  color: ${cores.rosaEscuro};

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  .linkProfile {
    text-decoration: none;
    color: ${cores.rosaEscuro};
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
  width: 21px;
  height: 21px;
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
