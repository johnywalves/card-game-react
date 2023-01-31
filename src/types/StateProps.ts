import { AnyAction, Reducer } from '@reduxjs/toolkit'

import BattlefieldStateProps from '../types/BattlefieldStateProps'

export type ReducerStateProps = {
  battlefield: Reducer<BattlefieldStateProps, AnyAction>
}

type StateProps = {
  battlefield: BattlefieldStateProps
}

export default StateProps
