import { Story, Meta } from '@storybook/react/types-6-0'

import Battlefield from '.'

export default {
  title: 'Battlefield',
  component: Battlefield
} as Meta

const Template: Story = (args) => <Battlefield {...args} />

export const Standard = Template.bind({})
