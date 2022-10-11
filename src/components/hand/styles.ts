import styled, { css } from 'styled-components'

import normalizeNumber from '../../functions/normalizeNumber'

export const HandWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

type CardHolderProps = {
  index: number
  size: number
}

const getTransform = (size: number, index: number, hover: boolean) => {
  if (size < 5) {
    return css`
      margin: 0 0.25rem;
      transform: translateY(${hover ? -35 : 0}%);
    `
  }

  return css`
    transform: translateY(${hover ? -35 : 0}%)
      translateX(${normalizeNumber(size, index) * -25}%);
  `
}

export const HandCardHolder = styled.div<CardHolderProps>`
  z-index: ${({ index, size }) => size - index};
  transition: transform 0.5s;

  ${({ index, size }) => getTransform(size, index, false)}

  &:hover {
    z-index: 10;
    ${({ index, size }) => getTransform(size, index, true)}
  }
`
