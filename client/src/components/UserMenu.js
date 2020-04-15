import React, { useState } from 'react'
import styled from 'styled-components'
import { InnerButton } from './InnerButton'
import { DropDown } from './DropDown'
import { UserPicture } from './UserPicture'

const Wrapper = styled.div`
  & > span {
    display: inline-block;
    max-width: 150px;
    padding-right: .6rem;
    font-size: 1rem;
    vertical-align: middle;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

const UserButton = styled(InnerButton)`
  display: inline-block;
  vertical-align: middle;
  box-shadow: ${props => props.isPressed && props.theme.innerShadow};

  & > div {
    box-shadow: ${props => props.isPressed ? 'none' : props.theme.shadow};
  }

  &:hover > div {
    box-shadow: ${props => props.isPressed && 'none'};
  }
`

export const UserMenu = props => {
  const [userMenuActive, setUserMenuActive] = useState(false)
  const { user, logout } = props.auth
  const { setCurrentPage, toggleSettings } = props.ui

  const showDropDown = () => {
    if (!userMenuActive) { 
      setUserMenuActive(true)
      document.addEventListener('click', hideDropDown)
    }
  }

  const hideDropDown = () => {
    setUserMenuActive(false)
    document.removeEventListener('click', hideDropDown)
  }

  return (
    <Wrapper>
      <span>{user.name}</span>
      <UserButton onClick={showDropDown} isPressed={userMenuActive}>
        <UserPicture src={user.picture}/>
      </UserButton>
      <DropDown active={userMenuActive}>
        <div disabled>Videos</div>
        <div disabled>Friends</div>
        <div onClick={toggleSettings}>Settings</div>
        <div onClick={props.toggleTheme}>Theme</div>
        <div onClick={logout}>Sign out</div>
      </DropDown>
    </Wrapper>
  )
}