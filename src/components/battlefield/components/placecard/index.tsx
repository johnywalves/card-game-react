import { ReactNode } from 'react'

import { PlacecardWrapper } from './styles'

type PlacecardProps = { children?: ReactNode }

const Placecard = ({ children }: PlacecardProps) => {
  return <PlacecardWrapper>{children}</PlacecardWrapper>
}

export default Placecard
