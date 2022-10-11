import styled from 'styled-components'

type WrapperProps = {
  deploy?: boolean
}

export const DeckWrapper = styled.div<WrapperProps>`
  display: block;
  border: 0.25rem solid var(--color-card-holder);
  width: var(--card-width);
  height: var(--card-height);
  border-radius: var(--card-padding);
  background-color: var(--color-battlefield);
`
