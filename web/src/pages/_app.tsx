import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/core'
import theme from '../theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
