import { configureStore } from '@reduxjs/toolkit'

import battlefieldReducer from './reducer/battlefieldSlice'
import { ReducerStateProps } from './types/StateProps'

const reducer: ReducerStateProps = { battlefield: battlefieldReducer }

export default configureStore({
  reducer
})
