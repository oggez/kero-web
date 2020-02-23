import React from 'react'
import styled from 'styled-components'
import { Container, Paper } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { blueGrey } from '@material-ui/core/colors'

import { HeaderMenu, AboutMe, Contact, Footer, ScrollToTop } from './components'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[900]
    },
    secondary: {
      main: blueGrey[50]
    }
  },
  typography: {
    fontFamily: "'playfair display',serif"
  }
})

const Wrapper = styled(Paper)`
  padding-bottom: 36px;
`

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div id="home-anchor" />
      <HeaderMenu />
      <Container>
        <Wrapper>
          <AboutMe />
          <Contact />
        </Wrapper>
        <ScrollToTop />
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
