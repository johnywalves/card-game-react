import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const HomeRow = styled.div`
  width: 100%;
  height: calc(var(--card-height) * 0.65);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const HomeDeck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`
