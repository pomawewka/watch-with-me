import { useEffect, useState } from 'react'
import { light, dark } from '../styles/themes'

export const useTheme = () => {
  const [current, setCurrent] = useState(light)
  const [ready, setReady] = useState(false)

  const updateTheme = theme => {
    window.localStorage.setItem('theme', theme.name)
    setCurrent(theme)
  }

  const toggleTheme = () => {
    current.name === 'light' ? updateTheme(dark) : updateTheme(light)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') === 'light' ? light : dark
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme) {
      updateTheme(dark)
    } else {
      localTheme && setCurrent(localTheme)
    }
    setReady(true)
  }, [])

  return { current, toggleTheme, ready }
}