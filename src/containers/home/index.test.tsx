import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../home'

it('Teste de jest', () => {
  render(<Home />)

  const text = screen.getByText(/home testing/i)
  expect(text).toBeInTheDocument()
})
