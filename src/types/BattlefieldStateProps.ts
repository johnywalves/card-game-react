import BattlefieldProps from '../types/BattlefieldProps'
import HandProps from '../types/HandProps'

type BattlefieldStateProps = BattlefieldProps &
  HandProps & {
    myPoints: number
    enemyPoints: number
    enemyNumberCards: number
  }

export default BattlefieldStateProps
