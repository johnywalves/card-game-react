import { Story, Meta } from '@storybook/react/types-6-0'

import Hand from '.'
import Database from '../../data'
import CardProps from '../../types/CardProps'
import HandProps from '../../types/HandProps'

const NoCards: CardProps[] = []

const OneCard = [Database.cards.EmpireUrdin.Soldier]

const TwoCards = [...OneCard, Database.cards.EmpireUrdin.Archer]

const ThreeCards = [...TwoCards, Database.cards.EmpireUrdin.FortificationPotion]

const FourCards = [...ThreeCards, Database.cards.EmpireUrdin.Swordsman]

const FiveCards = [...FourCards, Database.cards.EmpireUrdin.InnerFlame]

const SixCards = [...FiveCards, Database.cards.EmpireUrdin.Soldier]

const SevenCards = [...SixCards, Database.cards.EmpireUrdin.Archer]

const EightCards = [
  ...SevenCards,
  Database.cards.EmpireUrdin.FortificationPotion
]

const NineCards = [...EightCards, Database.cards.EmpireUrdin.Swordsman]

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
