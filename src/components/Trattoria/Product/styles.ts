import styled from 'styled-components'
import { colors } from '../../../styles'

export const Card = styled.div`
  background-color: ${colors.orange};
  color: ${colors.white};
  border: 8px solid ${colors.orange};
  position: relative;

  > div {
    max-width: 100%;
    max-height: 280px;
    object-fit: cover;

    > img {
      width: 304px;
      height: 167px;
      object-fit: cover;
    }
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px;
  margin-bottom: 32px;
`

export const Button = styled.button`
  background-color: ${colors.background2};
  color: ${colors.orange};
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  height: 24px;
  border: none;
  cursor: pointer;
  margin-top: 8px;
  position: absolute;
  bottom: 0;
  left: 0;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
  }
`

export const ModalContent = styled.div`
  position: relative;
  max-width: 1024px;
  display: flex;
  background-color: ${colors.orange};
  color: ${colors.white};
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 32px;
  z-index: 1;

  h3 {
    font-size: 18px;
    margin-left: 24px;
  }

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  p {
    margin-left: 24px;
    margin-right: 32px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  button {
    margin-left: 24px;
  }

  img.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`

export const AddButton = styled.button`
  background-color: ${colors.background2};
  color: ${colors.orange};
  font-size: 14px;
  font-weight: bold;
  height: 24px;
  border: none;
  cursor: pointer;
  padding-left: 8px;
  padding-right: 8px;
`
