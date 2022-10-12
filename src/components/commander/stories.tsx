import { Story, Meta } from '@storybook/react/types-6-0'

import Commander from '.'
import Database from '../../data'
import CommanderProps from '../../types/CommanderProps'

export default {
  title: 'Commander',
  component: Commander,
  argTypes: {
    initialHitPoints: { control: { type: 'number', min: 0, max: 20, step: 1 } },
    defense: { control: { type: 'number', min: 0, max: 10, step: 1 } }
  }
} as Meta

const Template: Story<CommanderProps> = (args) => <Commander {...args} />

export const Emperor = Template.bind({})

Emperor.args = Database.collections.EmpireUrdin.Commanders.Emperor

export const Warlock = Template.bind({})

Warlock.args = Database.collections.EmpireUrdin.Commanders.Warlock
