import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group' 

const Wrapper = styled.div`
  transition: ${p => p.timeout}ms ease-out;

  &.fadeIn-enter {
    /* transform: translateY(-10px); */
    opacity: 0;
  }
  &.fadeIn-enter-active {
    /* transform: translateY(0); */
    opacity: 1;
  }
  &.fadeIn-exit {
    /* transform: translateY(0); */
    opacity: 1;
  }
  &.fadeIn-exit-active {
    /* transform: translateY(-10px); */
    opacity: 0;
  }
`

export const FadeIn = props => {
  const { timeout = 200 } = props
  return(
    <CSSTransition in={props.in} classNames="fadeIn" timeout={timeout} unmountOnExit>
      <Wrapper timeout={timeout}>
        {props.children}
      </Wrapper>
    </CSSTransition>
  )
}