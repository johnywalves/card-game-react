import Commander from '.'
import Database from '../../data'
import { render, screen } from '../../test-utils'

describe('<Commander />', () => {
  it('should render labels', () => {
    render(
      <Commander {...Database.collections.EmpireUrdin.Commanders.Emperor} />
    )

    expect(screen.getByLabelText('hitpoint')).toBeInTheDocument()

    expect(screen.getByLabelText('defense')).toBeInTheDocument()

    expect(screen.getByLabelText('name')).toBeInTheDocument()

    expect(screen.getByLabelText('description')).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(
      <Commander {...Database.collections.EmpireUrdin.Commanders.Emperor} />
    )

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'var(--color-card)'
    )
  })
})
