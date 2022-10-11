import Database from '../../data'
import { CardState } from '../../types/CardProps'
import Card from '../card'
import Placecard from './components/placecard'
import {
  BattlefieldWrapper,
  BattlefieldSeparator,
  BattlefieldRow
} from './styles'

const Battlefield = () => {
  return (
    <BattlefieldWrapper>
      <BattlefieldRow top>
        <Placecard></Placecard>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
      </BattlefieldRow>
      <BattlefieldRow>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Soldier}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.FortificationPotion}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard></Placecard>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Soldier}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Soldier}
            state={CardState.Deploy}
          />
        </Placecard>
      </BattlefieldRow>
      <BattlefieldSeparator />
      <BattlefieldRow top>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Soldier}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Soldier}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Swordsman}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Soldier}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.FortificationPotion}
            state={CardState.Deploy}
          />
        </Placecard>
      </BattlefieldRow>
      <BattlefieldRow>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard></Placecard>
        <Placecard>
          <Card
            {...Database.collections.EmpireUrdin.Cards.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
      </BattlefieldRow>
    </BattlefieldWrapper>
  )
}

export default Battlefield
