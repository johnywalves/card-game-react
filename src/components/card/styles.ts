import styled, { css } from 'styled-components'

type WrapperProps = {
  deploy?: boolean
}

const cardDeployed = css`
  height: var(--card-height-deploy);
`

const cardHandle = css`
  height: var(--card-height);
`

export const CardWrapper = styled.div<WrapperProps>`
  border: 0.25rem solid var(--color-card-holder);
  background-color: var(--color-card);
  border-radius: var(--card-padding);
  width: var(--card-width);
  ${({ deploy }) => (deploy ? cardDeployed : cardHandle)};
  padding: var(--card-padding);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardValues = styled.div`
  height: 10rem;

  display: flex;
  flex-direction: column;
`

const LabelValues = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  width: 100%;
  height: 3rem;
  text-align: right;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  p {
    padding-right: 0.5rem;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`

export const CardLevel = styled(LabelValues)``

export const CardIcon = styled(LabelValues)`
  padding-right: 0.25rem;
  height: 4rem;

  svg {
    width: 3rem;
    height: 3rem;
  }
`

export const CardAttack = styled(LabelValues)``

export const CardDefense = styled(LabelValues)``

export const CardExplain = styled.div`
  background-color: white;
  border-radius: calc(var(--card-padding) * 0.75);
  width: 100%;
  height: calc(
    var(--card-height) - var(--card-height-deploy) * 1.75 - var(--card-padding)
  );
  padding: 0.5rem;
`

export const CardName = styled.p`
  width: 100%;
  height: 3.8rem;

  color: var(--color-description);
  font-size: 1.4rem;
  font-weight: 700;
`

export const CardDescription = styled.p`
  width: 100%;

  color: var(--color-description);
  font-size: 1.2rem;
`
