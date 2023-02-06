import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Database from '../data'
import BattlefieldStateProps from '../types/BattlefieldStateProps'
import { BattlefieldStatus } from '../types/BattlefieldStatus'

const initialState: BattlefieldStateProps = {
  currentStatus: BattlefieldStatus.Waiting,
  positionInHandDeploy: 1,
  myCommander: { ...Database.collections.EmpireUrdin.Commanders.Emperor },
  myArmy: [
    [
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.EmpireUrdin.Cards.Soldier },
      { ...Database.collections.EmpireUrdin.Cards.Swordsman },
      { ...Database.collections.Config.NoOne }
    ],
    [
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.EmpireUrdin.Cards.Archer },
      { ...Database.collections.EmpireUrdin.Cards.Archer },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne }
    ]
  ],
  myPoints: 2,
  listCards: [
    Database.collections.EmpireUrdin.Cards.Soldier,
    Database.collections.EmpireUrdin.Cards.Swordsman,
    Database.collections.EmpireUrdin.Cards.Archer,
    Database.collections.EmpireUrdin.Cards.InnerFlame,
    Database.collections.EmpireUrdin.Cards.FortificationPotion
  ],
  enemyCommander: {
    ...Database.collections.EmpireUrdin.Commanders.Warlock
  },
  enemyArmy: [
    [
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.EmpireUrdin.Cards.Swordsman },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.EmpireUrdin.Cards.Swordsman },
      { ...Database.collections.Config.NoOne }
    ],
    [
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.EmpireUrdin.Cards.Archer },
      { ...Database.collections.EmpireUrdin.Cards.InnerFlame },
      { ...Database.collections.EmpireUrdin.Cards.FortificationPotion },
      { ...Database.collections.Config.NoOne }
    ]
  ],
  enemyPoints: 3,
  enemyNumberCards: 0
}

const reducers = {
  deployMyCard: (
    state: BattlefieldStateProps,
    action: PayloadAction<{
      x: number
      y: number
    }>
  ) => {
    const { x, y } = action.payload

    const card = state.listCards[state.positionInHandDeploy]

    state.currentStatus = BattlefieldStatus.Waiting
    state.listCards.splice(state.positionInHandDeploy, 1)
    state.myPoints -= card.level
    state.myArmy[x][y - 1] = { ...card }
  },
  choosePlaceDeployMyCard: (
    state: BattlefieldStateProps,
    action: PayloadAction<{
      position: number
    }>
  ) => {
    state.currentStatus = BattlefieldStatus.ChoosingDeployPlace
    state.positionInHandDeploy = action.payload.position
  }
}

export const battlefieldSlice = createSlice({
  name: 'battlefield',
  initialState,
  reducers
})

export const { deployMyCard, choosePlaceDeployMyCard } =
  battlefieldSlice.actions

export default battlefieldSlice.reducer
