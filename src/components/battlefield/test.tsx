import { render, screen } from '@testing-library/react'

import Battlefield from '.'

describe('<Battlefield />', () => {
  it('should render labels', () => {
    render(<Battlefield />)

    expect(screen.getByLabelText('separator')).toBeInTheDocument()
  })
})
