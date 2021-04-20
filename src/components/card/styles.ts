import styled, { css } from 'styled-components'

const LabelValues = styled.p`
  font-size: 2rem;
  font-weight: 700;
`

type WrapperProps = {
  deploy?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  background-color: var(--color-card);
  border-radius: var(--card-padding);
  width: var(--card-width);
  ${({ deploy }) =>
    deploy
      ? css`
          height: var(--card-height-deploy);
        `
      : css`
          height: var(--card-height);
        `};
  padding: var(--card-padding);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Values = styled.div`
  height: 10rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Level = styled(LabelValues)``

export const CombatValues = styled.div`
  display: flex;
  flex-direction: column;
`

export const Reach = styled(LabelValues)``

export const Attack = styled(LabelValues)``

export const Defense = styled(LabelValues)``

export const Explain = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  width: 100%;
  height: 12rem;
  padding: 0.5rem;
`

export const Name = styled.p`
  width: 100%;
  height: 3.8rem;

  font-size: 1.4rem;
  font-weight: 700;
`

export const Description = styled.p`
  width: 100%;

  font-size: 1.2rem;
`
