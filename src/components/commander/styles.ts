import styled from 'styled-components'

export const CommanderWrapper = styled.div`
  display: block;
  width: var(--commander-width);

  color: var(--color-text);
  background-color: var(--color-card);

  border: 0.25rem solid var(--color-card-holder);
  border-radius: var(--card-padding);
  padding: var(--card-padding);
`

export const CommanderValues = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: var(--card-padding);
  margin-bottom: var(--card-padding);

  font-size: 2.5rem;
  font-weight: 900;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const CommanderHitPoints = styled.p`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const CommanderDefense = styled.p`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const CommanderExplain = styled.div`
  background-color: white;
  border-radius: calc(var(--card-padding) * 0.75);
  padding: 0.5rem;
`

export const CommanderName = styled.h3`
  font-size: 2rem;
`

export const CommanderDescription = styled.p`
  height: calc(var(--commander-height) * 0.6);
  color: var(--color-description);
  font-size: 1.5rem;
  padding-top: 0.5rem;
`
