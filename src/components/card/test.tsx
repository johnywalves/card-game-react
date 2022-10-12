import Card from '.'
import Database from '../../data'
import { render, screen } from '../../test-utils'

describe('<Card />', () => {
  it('should render labels (Soldier)', () => {
    render(<Card {...Database.collections.EmpireUrdin.Cards.Soldier} />)

    expect(screen.getByLabelText('level')).toBeInTheDocument()

    expect(screen.getByLabelText('attack')).toBeInTheDocument()

    expect(screen.getByLabelText('defense')).toBeInTheDocument()

    expect(screen.getByLabelText('name')).toBeInTheDocument()

    expect(screen.getByLabelText('description')).toBeInTheDocument()
  })

  it('should render labels (Spell)', () => {
    render(<Card {...Database.collections.EmpireUrdin.Cards.InnerFlame} />)

    expect(screen.getByLabelText('level')).toBeInTheDocument()

    expect(screen.getByLabelText('effect')).toBeInTheDocument()

    expect(screen.getByLabelText('name')).toBeInTheDocument()

    expect(screen.getByLabelText('description')).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(
      <Card {...Database.collections.EmpireUrdin.Cards.Soldier} />
    )

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'var(--color-card)'
    )
  })
})
