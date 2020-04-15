import React, { useContext, useRef } from 'react'
import { Wrapper } from './style.js'
import { FadeIn } from 'styles/transitions' 
import { GlobalContext } from 'context/GlobalContext'
import { UserPicture } from 'components/UserPicture'
import { InnerButton } from 'components/InnerButton'
import { useOnClickOutside } from 'hooks/useOnClickOutside'

export const Settings = props => {
  const { auth: { user, setUser }, theme } = useContext(GlobalContext)
  const settingsRef = useRef(null)
  const fileInputRef = useRef(null)

  useOnClickOutside(settingsRef, props.close)

  const handleInputChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const updateInput = async event => {
    const body = JSON.stringify({update: { [event.target.name] : event.target.value }})
    try {
      await fetch('/user/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
      })
    } catch(error) {
      console.log(error)
    }
  }

  const handleFileInputChange = async event => {
    event.preventDefault()
    try {
      const picture = event.target.files[0]
      if (picture.name.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        setUser({
          ...user,
          picture: URL.createObjectURL(picture)
        })
  
        const body = new FormData()
        body.append('picture', picture)
        await fetch('/user/picture', {
          method: 'POST',
          body: body
        })
      }
    } catch(error) {
      console.log(error)
    }
  }

  const triggerInputClick = () => {
    fileInputRef.current.click()
  }

  return(
    <FadeIn in={props.active}>
      <Wrapper ref={settingsRef}>
        <h3>Settings</h3>
        <div className="user-settings">
          <InnerButton width="100px" height="100px" border="4" onClick={triggerInputClick}>
            <UserPicture src={user.picture}/>
            <input type="file" name="picture" accept=".jpg,.jpeg,.png,.gif" ref={fileInputRef} onChange={handleFileInputChange}/>
          </InnerButton>
          <div className="user-data">
            <div>
              <b>Email:</b>
              <span>{user.email}</span>
            </div>
            <div>
              <b>Username:</b>
              <span className="with-input">
                <input type="text" name="name" value={user.name} onChange={handleInputChange} onBlur={updateInput}/>
              </span>
            </div>
          </div>
        </div>
      </Wrapper>
    </FadeIn>
  )
}