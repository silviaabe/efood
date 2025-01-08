import styled from 'styled-components'
import { colors } from '../../../styles'

export const Container = styled.section`
  background-color: ${colors.background};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  max-width: 1366px;
  padding: 56px 171px 120px 171px;
  width: 100%;
  margin: auto;

  li {
    width: 100%
    max-width: 100%
  }
`
