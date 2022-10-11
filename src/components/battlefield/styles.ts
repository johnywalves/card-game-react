import styled, { css } from 'styled-components'

export const BattlefieldWrapper = styled.div`
  width: var(--battlefield-width);
  height: var(--battlefield-height);

  display: flex;
  flex-direction: column;
`

type RowProps = {
  top?: boolean
}

export const BattlefieldSeparator = styled.div<RowProps>`
  background-color: var(--color-separation);
  height: var(--battlefield-padding);
`

const borderTop = css`
  border-radius: var(--card-padding) var(--card-padding) 0 0;
`

const borderBottom = css`
  border-radius: 0 0 var(--card-padding) var(--card-padding);
`

export const BattlefieldRow = styled.div<RowProps>`
  background-color: var(--color-battlefield);
  height: calc((100% - var(--battlefield-padding)) / 4);
  width: 100%;
  display: flex;
  flex-direction: row;

  ${({ top }) => (top ? borderTop : borderBottom)}
`
