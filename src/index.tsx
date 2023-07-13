import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import './styles/global.scss'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <ChakraProvider>
      <BrowserRouter>
        <Container w="100%" h="100%" bg="blue.800">
          <App />
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  )
}
