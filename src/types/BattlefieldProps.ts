import CardProps from './CardProps'
import CommanderProps from './CommanderProps'

type BattlefieldProps = {
  enemyCommander: CommanderProps
  enemyArmy: Array<Array<CardProps>>
  myCommander: CommanderProps
  myArmy: Array<Array<CardProps>>
}

export default BattlefieldProps
