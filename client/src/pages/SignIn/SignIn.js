import React from 'react'
import { Wrapper, Title, SignUp } from './style'
import { Header } from 'components/Header'
import { Button } from 'components/Button'
import { InnerText } from 'components/InnerText'
import { Divider } from 'components/Divider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SERVER_PATH = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''

export const SignIn = () => {
  return (
    <Wrapper>
      <Header/>

      <Title>
        <div className="first-line">Watch</div>
        <div className="second-line">
          <span>with</span>
          <InnerText size="2.2em">your</InnerText>
          <span className="col">
            <div>videos</div>
            <div>friends</div>
          </span>
        </div>

        <Divider width="35%"/>
        
        <div className="sub-title">Real one online cinema</div>
      </Title>

      <SignUp>
        <p>Sign Up with:</p>
        <Button href={SERVER_PATH + "/auth/google"}>
          <FontAwesomeIcon icon={['fab', 'google']} />
          <span>Google</span>
        </Button>
        <Button href={SERVER_PATH + "/auth/facebook"}>
          <FontAwesomeIcon icon={['fab', 'facebook']} />
          <span>Facebook</span>
        </Button>
        <Button href={SERVER_PATH + "/auth/discord"}>
          <FontAwesomeIcon icon={['fab', 'discord']} />
          <span>Discord</span>
        </Button>
      </SignUp>
    </Wrapper>
  )
}