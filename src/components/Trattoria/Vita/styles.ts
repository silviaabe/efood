import styled from 'styled-components'
import { colors } from '../../../styles'

export const Restbar = styled.header`
  font-size: 26px;
  height: 280px;
  color: ${colors.white};
  margin: auto;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }

  .container {
    max-width: 1366px;
    padding: 33px 171px;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-weight: bold;
      z-index: 1;
    }

    h3 {
      font-weight: 100;
      z-index: 1;
    }
  }
`
