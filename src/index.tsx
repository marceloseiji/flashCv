import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import ResponsiveMainContainer from 'components/responsiveMainContainer'
import darkTheme from 'themes/appDarkTheme'
import './styles/global.scss'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <ResponsiveMainContainer>
            <App />
          </ResponsiveMainContainer>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}
