import { Story, Meta } from '@storybook/react/types-6-0'

import Card from '.'
import Database from '../../data'
import CardProps, { CardType, CardReach } from '../../types/CardProps'

export default {
  title: 'Cards',
  component: Card,
  argTypes: {
    type: {
      options: [CardType.Artifact, CardType.Creature, CardType.Spell],
      control: 'select'
    },
    reach: {
      options: [CardReach.Meelee, CardReach.Distance],
      control: 'select'
    },
    level: { control: { type: 'number', min: 0, max: 12, step: 1 } },
    attack: { control: { type: 'number', min: 0, max: 12, step: 1 } },
    defense: { control: { type: 'number', min: 0, max: 12, step: 1 } }
  }
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Criatura = Template.bind({})

Criatura.args = Database.cards.EmpireUrdin.Soldier

export const Artefato = Template.bind({})

Artefato.args = Database.cards.EmpireUrdin.FortificationPotion

export const Feitico = Template.bind({})

Feitico.args = Database.cards.EmpireUrdin.InnerFlame
