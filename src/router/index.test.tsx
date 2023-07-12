import React from 'react'
import { render } from '@testing-library/react'
import Router from '.'
import * as reactRouterDom from 'react-router-dom'

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    createBrowserRouter: () => jest.fn()
  }
})

describe('routes', () => {
  render(<Router />)

  expect(reactRouterDom.createBrowserRouter).toBeCalled()
})
