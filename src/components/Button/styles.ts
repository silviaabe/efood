import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin-left: 8px;
  margin-bottom: 8px;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin-left: 8px;
  margin-bottom: 8px;
  text-decoration: none;
  position: absolute;
  bottom: 0;
  left: 0;
`
