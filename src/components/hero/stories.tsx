import { Story, Meta } from '@storybook/react/types-6-0'

import Hero from '.'
import Database from '../../data'
import HeroProps from '../../types/HeroProps'

export default {
  title: 'Hero',
  component: Hero,
  argTypes: {
    initialHitPoints: { control: { type: 'number', min: 0, max: 20, step: 1 } },
    defense: { control: { type: 'number', min: 0, max: 10, step: 1 } }
  }
} as Meta

const Template: Story<HeroProps> = (args) => <Hero {...args} />

export const King = Template.bind({})

King.args = Database.collections.EmpireUrdin.Heroes.King

export const Warlock = Template.bind({})

Warlock.args = Database.collections.EmpireUrdin.Heroes.Warlock
