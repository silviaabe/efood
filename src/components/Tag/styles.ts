import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin-left: 8px;
  margin-bottom: 8px;
`
