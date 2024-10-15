import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.darkPink : colors.lightPink};
  color: ${(props) =>
    props.variant === 'primary' ? colors.lightPink : colors.darkPink};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.darkPink};
  color: ${colors.lightPink};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
