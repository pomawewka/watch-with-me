import {createContext} from 'react'

export const GlobalContext = createContext({
  theme: {
    current: 'light',
    setTheme: () => {},
  },
  auth: {
    loggedIn: false,
    user: {},
    logout: () => {}
  }
})