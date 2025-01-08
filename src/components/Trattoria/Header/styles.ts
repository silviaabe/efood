import styled from 'styled-components'
import { colors } from '../../../styles'

export const Headerbar = styled.header`
  color: ${colors.orange};
  height: 186px;
  align-items: center;

  .container {
    padding-top: 64px;
    display: flex;
    justify-content: center;
  }

  .textos {
    max-width: 1366px;
    padding: 64px 171px;
    display: flex;
    justify-content: space-between;
    margin: -100px auto;
  }

  a {
    text-decoration: none;
    color: ${colors.orange};
    font-weight: bold;
    font-size: 18px;
  }
`

export const CartButton = styled.h2`
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`
