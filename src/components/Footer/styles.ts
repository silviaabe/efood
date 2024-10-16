import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.lightPink};
  padding: 40px 0;
  text-align: center;
  font-size: 10px;
`

export const Links = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 80px;
`
