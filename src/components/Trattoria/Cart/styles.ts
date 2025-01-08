import styled from 'styled-components'
import { colors } from '../../../styles'
import { Button } from '../Product/styles'
import lixeira from '../../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.preto};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  color: ${colors.background2};
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
  width: 360px;
  background-color: ${colors.orange};
  z-index: 1;
  padding: 32px 8px 16px 8px;

  ${Button} {
    position: relative;
    max-width: 100%;
    width: 100%;
    //font-size: 16px;
  }
`

export const Prices = styled.p`
  display: flex;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.background2};
  margin-top: 40px;
  margin-bottom: 8px;
  justify-content: space-between;
`

export const TextCart = styled.p`
  font-size: 18px;
  color: ${colors.orange};

  p {
    font-weight: bold;
    margin-bottom: 16px;
  }
  span {
    font-size: 14px;
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  padding: 8px;
  background-color: ${colors.background2};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 8px;
    margin-right: 8px;
    cursor: pointer;
  }
`
export const Form = styled.div`
  display: block;
  color: ${colors.background2};
  font-size: 16px;

  h4 {
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
  }
`

export const InputGroup = styled.div`
  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
    margin-top: 8px;
  }

  &.input-group {
    display: flex;

    .input-css {
      margin-right: 34px;
    }

    .input-card {
      width: 100%;
      margin-right: 34px;
    }

    .input-cvv {
      width: 87px;
      margin-left: auto;
    }
  }

  input {
    background-color: ${colors.background2};
    height: 32px;
    width: 100%;
    padding: 0 8px;
    border: 1px solid ${colors.background2};

    &.error {
      border: 3px solid red;
    }
  }

  .input-mask {
    border: none;
  }

  .input-mask-error {
    border: 3px solid red;
  }
`
