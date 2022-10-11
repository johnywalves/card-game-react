import styled from 'styled-components'

type WrapperProps = {
  deploy?: boolean
}

export const CommandPointsWrapper = styled.div<WrapperProps>`
  font-size: 3rem;
  font-weight: 900;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 3rem;
    height: 3rem;
  }
`
