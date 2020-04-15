import React from 'react'
import styled from 'styled-components'
import { FadeIn } from '../styles/transitions' 

const StyledDropDown = styled.div`
  width: 130px;
  position: absolute;
  top: 75px;
  right: 5px;
  padding: 6px 10px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.smallShadow};

  & > * {
    text-align: center;
    padding: 8px 0;
    margin: 4px 0;
    border-radius: 10px;
    transition: box-shadow .4s ease-out;
  }
  
  & > *:hover {
    box-shadow: inset 1px 1px 3px ${props => props.theme.shadowsColor}, inset -1px -1px 3px ${props => props.theme.lightsColor};
  }
`

export const DropDown = props => {
  return(
    <FadeIn in={props.active}>
      <StyledDropDown>
        {props.children}
      </StyledDropDown>
    </FadeIn>
  )
}