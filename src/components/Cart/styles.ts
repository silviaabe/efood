import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import trash from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.darkPink};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  overflow-y: auto;

  header {
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;

    img {
      width: 16px;
      height: 16px;
      margin: 0;
      cursor: pointer;
    }
  }

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    border: none;
    cursor: pointer;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`

export const Total = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.lightPink};
  margin: 40px 0 16px;
  display: flex;
  justify-content: space-between;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.lightPink};
  padding: 8px 8px 12px;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.darkPink};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${colors.darkPink};
    font-size: 14px;
  }

  button {
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
