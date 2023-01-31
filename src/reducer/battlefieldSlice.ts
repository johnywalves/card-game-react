import { createSlice } from '@reduxjs/toolkit'

import Database from '../data'
import BattlefieldStateProps from '../types/BattlefieldStateProps'

const initialState: BattlefieldStateProps = {
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

export const battlefieldSlice = createSlice({
  name: 'battlefield',
  initialState,
  reducers: {}
})

export default battlefieldSlice.reducer
