import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin: 56px 0 120px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  background-color: ${colors.darkPink};
  padding: 32px;
  position: relative;
  z-index: 1;
  display: flex;

  header {
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;

    > img {
      width: 16px;
      height: 16px;
      margin: 0;
    }
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${colors.white};
    font-size: 18px;
    font-weight: bold;
  }

  p {
    color: ${colors.white};
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
  }

  ${ButtonLink} {
    background-color: ${colors.lightPink};
    color: ${colors.darkPink};
    width: 100%;
  }
`
