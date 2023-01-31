import { useSelector } from 'react-redux'

import Battlefield from '../../components/battlefield'
import CommandPoints from '../../components/commandPoints'
import Deck from '../../components/deck'
import Enemy from '../../components/enemy'
import Graveyard from '../../components/graveyard'
import Hand from '../../components/hand'
import StateProps from '../../types/StateProps'

import { HomeWrapper, HomeRow, HomeDeck } from './styles'

const HomeView = () => {
  // Enemy state
  const enemyCommander = useSelector(
    (state: StateProps) => state.battlefield.enemyCommander
  )
  const enemyArmy = useSelector(
    (state: StateProps) => state.battlefield.enemyArmy
  )
  const enemyPoints = useSelector(
    (state: StateProps) => state.battlefield.enemyPoints
  )
  const enemyNumberCards = useSelector(
    (state: StateProps) => state.battlefield.enemyNumberCards
  )

  // My state
  const myCommander = useSelector(
    (state: StateProps) => state.battlefield.myCommander
  )
  const myArmy = useSelector((state: StateProps) => state.battlefield.myArmy)
  const myPoints = useSelector(
    (state: StateProps) => state.battlefield.myPoints
  )
  const listCards = useSelector(
    (state: StateProps) => state.battlefield.listCards
  )

  return (
    <HomeWrapper>
      <Enemy numberCards={enemyNumberCards} />
      {enemyPoints}
      <Battlefield
        enemyCommander={enemyCommander}
        enemyArmy={enemyArmy}
        myCommander={myCommander}
        myArmy={myArmy}
      />
      <HomeRow>
        <Graveyard />
        <Hand listCards={listCards} />
        <HomeDeck>
          <CommandPoints points={myPoints} />
          <Deck />
        </HomeDeck>
      </HomeRow>
    </HomeWrapper>
  )
}

export default HomeView
