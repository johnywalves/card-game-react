import { render, screen } from '@testing-library/react'

import Hand from '.'
import Database from '../../data'

describe('<Hand />', () => {
  it('should render labels', () => {
    render(<Hand listCards={[Database.cards.EmpireUrdin.Soldier]} />)

    expect(screen.getByLabelText('hand')).toBeInTheDocument()
  })

  it('should render labels a lot cards', () => {
    render(
      <Hand
        listCards={[
          Database.cards.EmpireUrdin.Soldier,
          Database.cards.EmpireUrdin.Soldier,
          Database.cards.EmpireUrdin.Soldier,
          Database.cards.EmpireUrdin.Soldier,
          Database.cards.EmpireUrdin.Soldier,
          Database.cards.EmpireUrdin.Soldier
        ]}
      />
    )

    expect(screen.getByLabelText('hand')).toBeInTheDocument()
  })
})
