import CardProps, { CardType } from '../../types/CardProps'

import EmpireUrdin from './EmpireUrdin'

const NoOne: CardProps = {
  type: CardType.Creature,
  level: 0,
  name: '',
  description: '',
  reach: 0,
  attack: 0,
  defense: 0
}

export default { Config: { NoOne }, EmpireUrdin }
