import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import ResponsiveContainer from 'components/responsiveContainer'
import './styles/global.scss'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <BrowserRouter>
      <CssBaseline />
      <ResponsiveContainer>
        <App />
      </ResponsiveContainer>
    </BrowserRouter>
  )
}
