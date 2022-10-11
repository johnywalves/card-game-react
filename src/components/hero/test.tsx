import { render, screen } from '@testing-library/react'

import Hero from '.'
import Database from '../../data'

describe('<Hero />', () => {
  it('should render labels', () => {
    render(<Hero {...Database.collections.EmpireUrdin.Heroes.King} />)

    expect(screen.getByLabelText('hitpoint')).toBeInTheDocument()

    expect(screen.getByLabelText('defense')).toBeInTheDocument()

    expect(screen.getByLabelText('name')).toBeInTheDocument()

    expect(screen.getByLabelText('description')).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(
      <Hero {...Database.collections.EmpireUrdin.Heroes.King} />
    )

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'var(--color-card)'
    )
  })
})
