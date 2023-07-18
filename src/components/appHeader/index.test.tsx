import React from 'react'
import { render } from '@testing-library/react'
import AppHeader from './index'

describe('when render appHeaeer', () => {
  it('should display a sgv image', () => {
    render(<AppHeader />)

    const displayedSvg = document.querySelector('svg')
    expect(displayedSvg).toBeInTheDocument()
  })
})
