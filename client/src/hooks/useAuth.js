import { useEffect, useState } from 'react'

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [ready, setReady] = useState(false)
  
  const logout = async () => {
    try {
      await fetch('/auth/logout')
      setLoggedIn(false)
      setUser(null)
    } catch (e) {
      console.log('Error', e)
    }
  }

  useEffect( () => {
    const getAuth = async () => {
      try {
        const response = await fetch('/auth/user')
        const auth = await response.json()
        setUser(auth.user)
        setLoggedIn(auth.loggedIn)
        setReady(true)
      }
      catch (e) {
        setUser(null)
        setLoggedIn(false)
        setReady(true)
        console.log('Error:', e)
      }
    }
    getAuth()
  }, [])

  return {user, loggedIn, ready, setUser, logout}
}