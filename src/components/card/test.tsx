import { render, screen } from '@testing-library/react'

import Card from '.'
import Database from '../../data'

describe('<Card />', () => {
  it('should render labels', () => {
    render(<Card {...Database.cards.EmpireUrdin.Soldier} />)

    expect(screen.getByLabelText('level')).toBeInTheDocument()

    expect(screen.getByLabelText('reach')).toBeInTheDocument()

    expect(screen.getByLabelText('attack')).toBeInTheDocument()

    expect(screen.getByLabelText('defense')).toBeInTheDocument()

    expect(screen.getByLabelText('name')).toBeInTheDocument()

    expect(screen.getByLabelText('description')).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(
      <Card {...Database.cards.EmpireUrdin.Soldier} />
    )

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'var(--color-card)'
    )
  })
})
