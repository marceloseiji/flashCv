import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import ResponsiveMainContainer from 'components/responsiveMainContainer'
import './styles/global.scss'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <BrowserRouter>
      <CssBaseline />
      <ResponsiveMainContainer>
        <App />
      </ResponsiveMainContainer>
    </BrowserRouter>
  )
}
