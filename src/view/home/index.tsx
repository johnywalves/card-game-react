import Battlefield from '../../components/battlefield'
import CommandPoints from '../../components/commandPoints'
import Deck from '../../components/deck'
import Enemy from '../../components/enemy'
import Graveyard from '../../components/graveyard'
import Hand from '../../components/hand'
import Database from '../../data'
import { HomeWrapper, HomeRow, HomeDeck } from './styles'

const HomeView = () => {
  return (
    <HomeWrapper>
      <Enemy numberCards={6} />
      <Battlefield
        enemy={{ ...Database.collections.EmpireUrdin.Commanders.Warlock }}
        commander={{ ...Database.collections.EmpireUrdin.Commanders.Emperor }}
      />
      <HomeRow>
        <Graveyard />
        <Hand
          listCards={[
            Database.collections.EmpireUrdin.Cards.Soldier,
            Database.collections.EmpireUrdin.Cards.Swordsman,
            Database.collections.EmpireUrdin.Cards.Archer,
            Database.collections.EmpireUrdin.Cards.InnerFlame,
            Database.collections.EmpireUrdin.Cards.FortificationPotion
          ]}
        />
        <HomeDeck>
          <CommandPoints points={2} />
          <Deck />
        </HomeDeck>
      </HomeRow>
    </HomeWrapper>
  )
}

export default HomeView
