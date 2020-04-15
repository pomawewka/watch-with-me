import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.background};
  background-image: ${props => props.theme.backgroundShadow};
  padding: 0.8em;
  margin: .5em 1em;
  text-align: center;
  width: 10em;
  border-radius: 1.5em;
  box-shadow: ${props => props.theme.buttonShadow};
  transition: ${props => props.theme.transition};
  svg {
    padding-right: .5em;
    font-size: 1.2em;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
  &:hover { 
    box-shadow: ${props => props.theme.buttonShadowHover};
  }
  &:active {
    box-shadow: ${props => props.theme.buttonShadowActive};
    background-image: ${props => props.theme.backgroundShadowActive};
  }
`

export const Button = props => {
  return (
    <StyledButton href={props.href}>
      {props.children}
    </StyledButton>
  )
}