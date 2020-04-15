import React, { useContext } from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'
import { Switch } from './Switch'
import { UserMenu } from './UserMenu'
import { GlobalContext } from '../context/GlobalContext'

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  width: calc(100% - 4rem);
`

export const Header = ({ui}) => {
  const {auth, theme} = useContext(GlobalContext)

  return (
    <Nav>
      <Logo/>
      { !auth.loggedIn
          ? <Switch checked={theme.current.name === 'dark'} changeHandler={theme.toggleTheme}/>
          : <UserMenu auth={auth} toggleTheme={theme.toggleTheme} ui={ui}/>
      }
    </Nav>
  )
}