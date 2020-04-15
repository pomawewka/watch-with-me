import React from 'react'
import styled from 'styled-components'

const StyledSwitch = styled.label`
  display: inline-flex;
  position: relative;
  width: 5rem;
  height: 3rem;
  border-radius: 2rem;
  box-shadow: ${props => props.theme.innerShadow};

  div {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    background-color: ${props => props.theme.background};
    border-radius: 50%;
    box-shadow: ${props => props.theme.smallShadow};
    transition: left 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    pointer-events: none;
  }
  input {
    display: none;
  }
  input:checked + div {
    left: 2.5rem;
  }
`

export const Switch = ({checked, changeHandler, message}) => {
  return (
    <StyledSwitch>
      <input type="checkbox" checked={checked} onChange={changeHandler}/>
      <div></div>
    </StyledSwitch>
  )
}