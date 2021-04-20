import { ReactNode } from 'react'

import * as S from './styles'

type PlacecardProps = { children: ReactNode }

const Placecard = ({ children }: PlacecardProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Placecard
