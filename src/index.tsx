import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, Container } from '@mui/material'
import './styles/global.scss'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth="xl">
        <App />
      </Container>
    </BrowserRouter>
  )
}
