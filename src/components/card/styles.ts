import styled from 'styled-components'

const LabelValues = styled.p`
  font-size: 2rem;
  font-weight: 700;
`

export const Wrapper = styled.div`
  background-color: #ff00dd;
  border-radius: 1rem;
  width: 18rem;
  padding: 1rem;
`

export const Values = styled.div`
  height: 9rem;

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
  padding: 0.5rem;
`

export const Name = styled.p`
  width: 100%;

  font-size: 1.4rem;
  font-weight: 700;
`

export const Description = styled.p`
  width: 100%;

  font-size: 1.2rem;
`
