import React, { useState, useContext } from 'react'
import { Wrapper } from './style'
import { GlobalContext } from 'context/GlobalContext'
import { Header } from 'components/Header'
import { SignIn } from '../SignIn'
import { Settings } from '../Settings'

export const Dashboard = () => {

  const {auth} = useContext(GlobalContext)
  const [showSettings, setShowSetting] = useState(false)
  const [currentPage, setCurrentPage] = useState(null)

  const toggleSettings = () => setShowSetting(!showSettings)

  if (!auth.loggedIn) {
    return <SignIn />
  }

  return(
    <Wrapper>
      <Header ui={{setCurrentPage, toggleSettings}} />
    
      <Settings active={showSettings} close={() => setShowSetting(false)}/>
    </Wrapper>
  )
}