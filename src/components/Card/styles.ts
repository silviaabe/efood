import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.darkPink};

  h2 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.lightPink};
    margin-bottom: 16px;
  }

  .margin-top {
    margin-top: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
