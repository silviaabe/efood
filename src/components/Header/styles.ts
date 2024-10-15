import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 186px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }

  .container {
    padding: 80px 0 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .restaurant {
      width: 200px;
    }

    .cart {
      width: 200px;
    }
  }

  a,
  span {
    color: ${colors.darkPink};
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }
`

export const CartButton = styled.span`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`
