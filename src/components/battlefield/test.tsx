import Battlefield from '.'
import Database from '../../data'
import { render, screen } from '../../test-utils'

describe('<Battlefield />', () => {
  it('should render Battlefield', () => {
    render(
      <Battlefield
        enemy={{ ...Database.collections.EmpireUrdin.Commanders.Emperor }}
        commander={{ ...Database.collections.EmpireUrdin.Commanders.Warlock }}
      />
    )

    expect(screen.getByLabelText('battlefield-row')).toBeInTheDocument()
  })
})
