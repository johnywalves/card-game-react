import Database from '../../data'
import { CardState } from '../../types/CardProps'
import Card from '../card'
import Placecard from './components/placecard'
import * as S from './styles'

const Battlefield = () => {
  return (
    <S.Wrapper>
      <S.Row>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
      </S.Row>
      <S.Row>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Soldier}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.FortificationPotion}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Swordsman}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Soldier}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Soldier}
            state={CardState.Deploy}
          />
        </Placecard>
      </S.Row>
      <S.Row aria-label="separator" separator />
      <S.Row>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Soldier}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Soldier}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Swordsman}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Soldier}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.FortificationPotion}
            state={CardState.Deploy}
          />
        </Placecard>
      </S.Row>
      <S.Row>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
        <Placecard>
          <Card
            {...Database.cards.EmpireUrdin.Archer}
            state={CardState.Deploy}
          />
        </Placecard>
      </S.Row>
    </S.Wrapper>
  )
}

export default Battlefield
