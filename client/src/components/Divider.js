import React from 'react'
import styled from 'styled-components'

const Hr = styled.hr`
  height: 0.1em;
  border: 0;
  border-radius: 5px;
  background: ${props => props.theme.background};
  box-shadow: ${props => props.theme.textShadow};
  transition: ${props => props.theme.transition};
`

export const Divider = props => {
  return (
    <Hr width={props.width}/>
  )
}