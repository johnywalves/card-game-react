export enum CardType {
  Artifact = 0,
  Creature = 1,
  Spell = 2
}

export enum CardState {
  Drawing = 0,
  Hand = 1,
  Spotlight = 2,
  Attacking = 3,
  Defensing = 4,
  Deploy = 5,
  Discard = 6
}

export enum CardReach {
  Meelee = 0,
  Distance = 1
}

type CardProps = {
  type: CardType
  level: number
  name: string
  description: string
  attack?: number
  defense?: number
  reach?: CardReach
  state?: CardState
}

export default CardProps
