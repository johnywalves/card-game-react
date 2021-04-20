import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--color-battlefield);
  width: var(--battlefield-width);
  height: var(--battlefield-height);

  display: flex;
  flex-direction: column;
`

type RowProps = {
  separator?: boolean
}

export const Row = styled.div<RowProps>`
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: row;

  ${({ separator }) =>
    Boolean(separator) &&
    css`
      background-color: var(--color-separation);
      height: var(--battlefield-padding);
    `}
`
