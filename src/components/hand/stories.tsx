import { Story, Meta } from '@storybook/react/types-6-0'

import Hand from '.'
import Database from '../../data'
import CardProps from '../../types/CardProps'
import HandProps from '../../types/HandProps'

const NoCards: CardProps[] = []

const OneCard = [Database.collections.EmpireUrdin.Cards.Soldier]

const TwoCards = [...OneCard, Database.collections.EmpireUrdin.Cards.Archer]

const ThreeCards = [
  ...TwoCards,
  Database.collections.EmpireUrdin.Cards.FortificationPotion
]

const FourCards = [
  ...ThreeCards,
  Database.collections.EmpireUrdin.Cards.Swordsman
]

const FiveCards = [
  ...FourCards,
  Database.collections.EmpireUrdin.Cards.InnerFlame
]

const SixCards = [...FiveCards, Database.collections.EmpireUrdin.Cards.Soldier]

const SevenCards = [...SixCards, Database.collections.EmpireUrdin.Cards.Archer]

const EightCards = [
  ...SevenCards,
  Database.collections.EmpireUrdin.Cards.FortificationPotion
]

const NineCards = [
  ...EightCards,
  Database.collections.EmpireUrdin.Cards.Swordsman
]

const groupCards = {
  NoCards,
  OneCard,
  TwoCards,
  ThreeCards,
  FourCards,
  FiveCards,
  SixCards,
  SevenCards,
  EightCards,
  NineCards
}

export default {
  title: 'Hand',
  component: Hand,
  argTypes: {
    listCards: {
      options: Object.keys(groupCards),
      mapping: groupCards,
      control: {
        type: 'select',
        labels: {
          NoCards: 'No Cards',
          OneCard: 'One Card',
          TwoCards: 'Two Cards',
          ThreeCards: 'Three Cards',
          FourCards: 'Four Cards',
          FiveCards: 'Five Cards',
          SixCards: 'Six Cards',
          SevenCards: 'Seven Cards',
          EightCards: 'Eight Cards',
          NineCards: 'Nine Cards'
        }
      }
    }
  }
} as Meta

const Template: Story<HandProps> = (args) => <Hand {...args} />

export const Standard = Template.bind({})
