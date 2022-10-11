import { useMemo } from 'react'

import CardProps, { CardState, CardType } from '../../types/CardProps'
import { Sword, Arrow, Shield, Spell, Artefact, Coin } from '../icons'
import {
  CardWrapper,
  CardValues,
  CardLevel,
  CardIcon,
  CardAttack,
  CardDefense,
  CardExplain,
  CardName,
  CardDescription
} from './styles'

const Card = ({
  type,
  name,
  description,
  level,
  attack,
  defense,
  reach,
  state
}: CardProps) => {
  const deploy = useMemo(() => state === CardState.Deploy, [state])

  const IconCard = () => {
    if (CardType.Artifact === type) {
      return <Artefact />
    }

    if (CardType.Spell === type) {
      return <Spell />
    }

    return reach ? <Arrow /> : <Sword />
  }

  return (
    <CardWrapper deploy={deploy}>
      <CardValues>
        {!deploy && (
          <CardLevel aria-label="level">
            <p>{level}</p> <Coin />
          </CardLevel>
        )}
        {!attack && (
          <CardIcon aria-label="effect">
            <IconCard />
          </CardIcon>
        )}
        {attack && (
          <CardAttack aria-label="attack">
            <p>{attack}</p> <IconCard />
          </CardAttack>
        )}
        {defense && (
          <CardDefense aria-label="defense">
            <p>{defense}</p> <Shield />
          </CardDefense>
        )}
      </CardValues>
      {!deploy && (
        <CardExplain>
          <CardName aria-label="name">{name}</CardName>
          <CardDescription aria-label="description">
            {description}
          </CardDescription>
        </CardExplain>
      )}
    </CardWrapper>
  )
}

export default Card
