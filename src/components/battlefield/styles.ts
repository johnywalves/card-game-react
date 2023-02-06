import styled, { css, keyframes } from 'styled-components'

export const BattlefieldWrapper = styled.div`
  height: var(--battlefield-height);

  display: flex;
  flex-direction: column;
  gap: var(--battlefield-padding);
`

type RowProps = {
  top?: boolean
}

export const BattlefieldSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--battlefield-padding);
`

export const BattlefieldCards = styled.div`
  display: flex;
  flex-direction: column;
`

const borderTop = css`
  border-radius: var(--card-padding) var(--card-padding) 0 0;
`

const borderBottom = css`
  border-radius: 0 0 var(--card-padding) var(--card-padding);
`

const chooseable = keyframes`
  0% {
    border-color: var(--color-battlefield);
  }

  40%, 90% {
    border-color: var(--color-card-holder);
  }

  100% {
    border-color: var(--color-battlefield);
  }
`

export const BattlefieldRow = styled.div<RowProps>`
  background-color: var(--color-battlefield);
  width: var(--battlefield-width);
  display: grid;
  grid-template-columns: repeat(5, calc((100% - 4rem) / 5));
  gap: 1rem;
  padding: 1rem;

  ${({ top }) => (top ? borderTop : borderBottom)}

  & > div.chooseable {
    border: 0.375rem var(--color-battlefield) dashed;
    border-radius: 0.5rem;
    animation: ${chooseable} 3s ease infinite;
  }
`
