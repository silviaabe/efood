import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.background2};
  padding: 32px 0;
  font-size: 10px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  .links {
    margin-left: 8px;
  }
`
export const Description = styled.p`
  text-align: center;
`
