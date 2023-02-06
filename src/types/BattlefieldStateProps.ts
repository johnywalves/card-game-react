import BattlefieldProps from '../types/BattlefieldProps'
import { BattlefieldStatus } from '../types/BattlefieldStatus'
import HandProps from '../types/HandProps'

type BattlefieldStateProps = BattlefieldProps &
  HandProps & {
    currentStatus: BattlefieldStatus
    positionInHandDeploy: number
    myPoints: number
    enemyPoints: number
    enemyNumberCards: number
  }

export default BattlefieldStateProps
