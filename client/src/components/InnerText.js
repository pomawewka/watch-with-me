import React from 'react'
import styled from 'styled-components'

const Text = styled.span`
  position: relative;
  color: transparent;
  font-size: ${props => props.size};
  line-height: 0.85;
  text-shadow: .02em .02em .04em ${props => props.theme.background}, 0 0 0 rgba(0, 0, 0, ${props => props.theme.textInnerShadow});
  transition: ${props => props.theme.transition};
  
  &:after {
    content: "${props => props.children}";
    position: absolute;
    left: 0;
    top: 0;
    color: transparent;
    text-shadow: -.02em -.02em .04em ${props => props.theme.background}, 0 0 0 rgba(255, 255, 255, ${props => props.theme.textInnerLights});
    transition: ${props => props.theme.transition};
    opacity: 0.5;
  }
`

export const InnerText = props => {
  return (
    <Text size={props.size}>{props.children}</Text>
  )
}