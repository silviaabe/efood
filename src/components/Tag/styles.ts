import styled from 'styled-components'

import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.darkPink};
  color: ${colors.lightPink};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
`
