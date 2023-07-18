import React from 'react'
import { render, screen } from '@testing-library/react'
import ResponsiveContainer from './index'

describe('when Responsive container renders', () => {
  it('should render children element', () => {
    const childrenMock = <p>Children mock test</p>
    render(<ResponsiveContainer children={childrenMock} />)

    expect(screen.getByText(/children mock test/i)).toBeInTheDocument()
  })
})
