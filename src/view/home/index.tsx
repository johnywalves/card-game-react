import Battlefield from '../../components/battlefield'
import Hand from '../../components/hand'
import Database from '../../data'
import { HomeWrapper } from './styles'

const HomeView = () => {
  return (
    <HomeWrapper>
      <Battlefield />
      <Hand
        listCards={[
          Database.collections.EmpireUrdin.Cards.Soldier,
          Database.collections.EmpireUrdin.Cards.Soldier,
          Database.collections.EmpireUrdin.Cards.Soldier,
          Database.collections.EmpireUrdin.Cards.Soldier,
          Database.collections.EmpireUrdin.Cards.Soldier,
          Database.collections.EmpireUrdin.Cards.Soldier
        ]}
      />
    </HomeWrapper>
  )
}

export default HomeView
