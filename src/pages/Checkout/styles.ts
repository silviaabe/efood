import styled from 'styled-components'
import { ButtonContainer } from '../../components/Button/styles'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CheckoutContainer = styled.div`
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
  color: ${colors.lightPink};
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
    margin-bottom: 8px;
    cursor: pointer;
  }
`

export const SetButton = styled.div`
  margin-top: 24px;
`

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 34px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${colors.lightPink};
    height: 32px;
    padding: 8px;
    border: 1px solid ${colors.lightPink};
    width: 100%;

    &.error {
      border: 1px solid red;
    }
  }
`
