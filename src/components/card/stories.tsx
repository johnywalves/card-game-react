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

export const CreatureShortReach = Template.bind({})

CreatureShortReach.args = Database.collections.EmpireUrdin.Cards.Soldier

export const CreatureLongReach = Template.bind({})

CreatureLongReach.args = Database.collections.EmpireUrdin.Cards.Archer

export const Artefact = Template.bind({})

Artefact.args = Database.collections.EmpireUrdin.Cards.FortificationPotion

export const Spell = Template.bind({})

Spell.args = Database.collections.EmpireUrdin.Cards.InnerFlame
