import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { GlobalContext } from 'context/GlobalContext' 
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/global'
import { useTheme } from 'hooks/useTheme'
import { useAuth } from 'hooks/useAuth'
import { Preloader } from 'components/Preloader'
import { Cursor } from 'components/Cursor'
import { SignIn } from 'pages/SignIn'
import { Dashboard } from 'pages/Dashboard'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)


function App() {
  const auth = useAuth()
  const theme = useTheme()
  
  if (!theme.ready || !auth.ready) {
    return <Preloader />
  }
  
  return (
    <GlobalContext.Provider value={{theme, auth}}>
      <ThemeProvider theme={theme.current}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/">
              { !auth.loggedIn ? <SignIn /> : <Dashboard /> }
            </Route>
            <Redirect to="/"/>
          </Switch>
        </Router>
        <Cursor />
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}

export default App
