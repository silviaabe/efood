import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.rosaEscuro : cores.rosaClaro};
  color: ${(props) =>
    props.variant === 'primary' ? cores.rosaClaro : cores.rosaEscuro};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosaClaro};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
