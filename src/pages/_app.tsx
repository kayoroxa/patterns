import type { AppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import AppContextProvider from '../context/AppContext'
import '../styles/globals.css'

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </ThemeProvider>
    </>
  )
}
