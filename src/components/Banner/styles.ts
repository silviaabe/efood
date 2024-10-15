import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Logo = styled.img`
  margin-top: 64px;
`

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  margin-top: 140px;
  color: ${colors.darkPink};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
    margin-top: 90px;
  }
`

export const Header = styled.div`
  text-align: center;
`
