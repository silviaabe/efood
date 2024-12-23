import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer, ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${colors.darkPink};
  padding: 8px;
  margin-bottom: 32px;

  img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  &:hover {
    opacity: 0.7;
    transition: opacity 0.5s ease;
    cursor: pointer;
  }

  ${ButtonLink} {
    display: block;
    background-color: ${colors.lightPink};
    color: ${colors.darkPink};
    width: 100%;
    text-align: center;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin: 56px 0 120px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  color: ${colors.lightPink};
  margin: 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  color: ${colors.lightPink};
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

  &.is-visible {
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

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    width: 100%;

    img {
      margin-bottom: 24px;
    }
  }

  header {
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;

    > img {
      width: 16px;
      height: 16px;
      margin: 0;
      cursor: pointer;
    }
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
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

  ${ButtonContainer} {
    background-color: ${colors.lightPink};
    color: ${colors.darkPink};
    width: 100%;
    border: none;
    cursor: pointer;
  }
`
