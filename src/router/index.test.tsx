import React from 'react'
import { render, screen } from '@testing-library/react'
import Router from '.'
import * as reactRouterDom from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    createBrowserRouter: () => jest.fn()
  }
})

test('routes', () => {
  render(<Router />, { wrapper: BrowserRouter })

  expect(screen.getByText(/crie seu currículo online/i)).toBeInTheDocument()
})
