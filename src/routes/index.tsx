import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from 'containers/home'

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        path: '/',
        element: <Home />
      }
    ])}
  />
)

export default Router
