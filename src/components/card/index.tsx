import { useMemo } from 'react'

import CardProps, { CardState } from '../../types/CardProps'
import * as S from './styles'

const Card = ({
  name,
  description,
  level,
  attack,
  defense,
  reach,
  state
}: CardProps) => {
  const deploy = useMemo(() => state === CardState.Deploy, [state])

  return (
    <S.Wrapper deploy={deploy}>
      <S.Values>
        <S.Level aria-label="level">{level}</S.Level>
        <S.CombatValues>
          <S.Reach aria-label="reach">{reach}</S.Reach>
          <S.Attack aria-label="attack">{attack}</S.Attack>
          <S.Defense aria-label="defense">{defense}</S.Defense>
        </S.CombatValues>
      </S.Values>
      {!deploy && (
        <S.Explain>
          <S.Name aria-label="name">{name}</S.Name>
          <S.Description aria-label="description">{description}</S.Description>
        </S.Explain>
      )}
    </S.Wrapper>
  )
}

export default Card
