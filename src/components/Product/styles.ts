import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  position: relative;
  background-color: ${colors.white2};
  border: 1px solid ${colors.orange};

  max-width: 472px;

  > img {
    width: 472px;
    height: 217px;
    object-fit: cover;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-left: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 42px;
  margin-left: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Notes = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 8px;
`

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 8px;

  .display {
    display: flex;
    }
  }
`
