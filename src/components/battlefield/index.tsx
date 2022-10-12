import Commander from '../../components/commander'
import Database from '../../data'
import BattlefieldProps from '../../types/BattlefieldProps'
import { CardState } from '../../types/CardProps'
import Card from '../card'
import {
  BattlefieldWrapper,
  BattlefieldSide,
  BattlefieldCards,
  BattlefieldRow
} from './styles'

const Battlefield = ({ enemy, commander }: BattlefieldProps) => {
  return (
    <BattlefieldWrapper>
      <BattlefieldSide>
        <BattlefieldCards>
          <BattlefieldRow top aria-label="battlefield-row">
            <div></div>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Archer}
                state={CardState.Deploy}
              />
            </div>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Archer}
                state={CardState.Deploy}
              />
            </div>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Archer}
                state={CardState.Deploy}
              />
            </div>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Archer}
                state={CardState.Deploy}
              />
            </div>
          </BattlefieldRow>
          <BattlefieldRow>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Soldier}
                state={CardState.Deploy}
              />
            </div>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.FortificationPotion}
                state={CardState.Deploy}
              />
            </div>
            <div></div>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Soldier}
                state={CardState.Deploy}
              />
            </div>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Soldier}
                state={CardState.Deploy}
              />
            </div>
          </BattlefieldRow>
        </BattlefieldCards>
        <Commander {...enemy} deploy />
      </BattlefieldSide>

      <BattlefieldSide>
        <BattlefieldCards>
          <BattlefieldRow top>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Soldier}
                state={CardState.Deploy}
              />
            </div>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Soldier}
                state={CardState.Deploy}
              />
            </div>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Swordsman}
                state={CardState.Deploy}
              />
            </div>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Soldier}
                state={CardState.Deploy}
              />
            </div>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.FortificationPotion}
                state={CardState.Deploy}
              />
            </div>
          </BattlefieldRow>
          <BattlefieldRow>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Archer}
                state={CardState.Deploy}
              />
            </div>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Archer}
                state={CardState.Deploy}
              />
            </div>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Archer}
                state={CardState.Deploy}
              />
            </div>
            <div></div>
            <div>
              <Card
                {...Database.collections.EmpireUrdin.Cards.Archer}
                state={CardState.Deploy}
              />
            </div>
          </BattlefieldRow>
        </BattlefieldCards>
        <Commander {...commander} deploy />
      </BattlefieldSide>
    </BattlefieldWrapper>
  )
}

export default Battlefield
