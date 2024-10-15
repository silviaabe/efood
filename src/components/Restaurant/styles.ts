import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${colors.white};
  border: 1px solid ${colors.darkPink};
  position: relative;
  margin-bottom: 48px;
  text-decoration: none;
  display: block;
  color: ${colors.darkPink};

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  .linkProfile {
    text-decoration: none;
    color: ${colors.darkPink};
  }
`

export const Infos = styled.div`
  padding: 8px;
`

export const SetTitles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`

export const Set = styled.div`
  display: flex;
`

export const Star = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
`

export const Informations = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }
`
