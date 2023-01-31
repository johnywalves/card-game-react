import { Story, Meta } from '@storybook/react/types-6-0'

import Battlefield from '.'
import Database from '../../data'
import BattlefieldProps from '../../types/BattlefieldProps'

export default {
  title: 'Battlefield',
  component: Battlefield
} as Meta

const Template: Story<BattlefieldProps> = (args) => <Battlefield {...args} />

export const Standard = Template.bind({})

Standard.args = {
  enemyCommander: { ...Database.collections.EmpireUrdin.Commanders.Emperor },
  enemyArmy: [
    [
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne }
    ],
    [
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne }
    ]
  ],
  myCommander: { ...Database.collections.EmpireUrdin.Commanders.Warlock },
  myArmy: [
    [
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne }
    ],
    [
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne },
      { ...Database.collections.Config.NoOne }
    ]
  ]
}
