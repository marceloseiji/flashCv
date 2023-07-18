import React from 'react'
import { render, screen } from '@testing-library/react'
import ResponsiveMainContainer from './'
import { resizeScreenSize } from '../../utils/test/resizeScreenSize'

describe('when ResponsiveMainContainer', () => {
  it('it should render children element', () => {
    const mockedElement = <p>Testing ResponsiveMainContainer</p>
    render(<ResponsiveMainContainer children={mockedElement} />)

    const containerText = screen.getByText(/testing responsivemaincontainer/i)
  })
})

describe('when ResponsiveMainContainer renders under 600px', () => {
  it('should have margin-top: 56px and height: calc(100% - 56px)', () => {
    resizeScreenSize(400)
    const mockedElement = <p>Testing ResponsiveMainContainer</p>
    render(<ResponsiveMainContainer children={mockedElement} />)

    const container = screen.getByTestId('responsiveMainContainer')

    expect(container).toHaveStyle('margin-top: 56px')
    expect(container).toHaveStyle('height: calc(100% - 56px)')
  })
})

describe('when ResponsiveMainContainer renders above 600px', () => {
  it('should have margin-top: 64px and height: calc(100% - 64px)', () => {
    resizeScreenSize(800)
    const mockedElement = <p>Testing ResponsiveMainContainer</p>
    render(<ResponsiveMainContainer children={mockedElement} />)

    const container = screen.getByTestId('responsiveMainContainer')

    expect(container).toHaveStyle('margin-top: 64px')
    expect(container).toHaveStyle('height: calc(100% - 64px)')
  })
})
