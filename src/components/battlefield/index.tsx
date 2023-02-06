import Commander from '../../components/commander'
import BattlefieldProps from '../../types/BattlefieldProps'

import CardInPosition from './CardInPosition'
import {
  BattlefieldWrapper,
  BattlefieldSide,
  BattlefieldCards,
  BattlefieldRow
} from './styles'

const Battlefield = ({
  enemyCommander,
  enemyArmy,
  myCommander,
  myArmy
}: BattlefieldProps) => {
  return (
    <BattlefieldWrapper>
      <BattlefieldSide>
        <BattlefieldCards>
          <BattlefieldRow top aria-label="battlefield-row">
            <CardInPosition x={1} y={1} deck={enemyArmy} />
            <CardInPosition x={1} y={2} deck={enemyArmy} />
            <CardInPosition x={1} y={3} deck={enemyArmy} />
            <CardInPosition x={1} y={4} deck={enemyArmy} />
            <CardInPosition x={1} y={5} deck={enemyArmy} />
          </BattlefieldRow>
          <BattlefieldRow>
            <CardInPosition x={0} y={1} deck={enemyArmy} />
            <CardInPosition x={0} y={2} deck={enemyArmy} />
            <CardInPosition x={0} y={3} deck={enemyArmy} />
            <CardInPosition x={0} y={4} deck={enemyArmy} />
            <CardInPosition x={0} y={5} deck={enemyArmy} />
          </BattlefieldRow>
        </BattlefieldCards>
        <Commander {...enemyCommander} deploy />
      </BattlefieldSide>

      <BattlefieldSide>
        <BattlefieldCards>
          <BattlefieldRow top>
            <CardInPosition x={0} y={1} deck={myArmy} ownField />
            <CardInPosition x={0} y={2} deck={myArmy} ownField />
            <CardInPosition x={0} y={3} deck={myArmy} ownField />
            <CardInPosition x={0} y={4} deck={myArmy} ownField />
            <CardInPosition x={0} y={5} deck={myArmy} ownField />
          </BattlefieldRow>
          <BattlefieldRow>
            <CardInPosition x={1} y={1} deck={myArmy} ownField />
            <CardInPosition x={1} y={2} deck={myArmy} ownField />
            <CardInPosition x={1} y={3} deck={myArmy} ownField />
            <CardInPosition x={1} y={4} deck={myArmy} ownField />
            <CardInPosition x={1} y={5} deck={myArmy} ownField />
          </BattlefieldRow>
        </BattlefieldCards>
        <Commander {...myCommander} deploy />
      </BattlefieldSide>
    </BattlefieldWrapper>
  )
}

export default Battlefield
