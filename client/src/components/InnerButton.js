import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: ${p => p.padding || '6px'};
  border-radius: 50%;
  transition: ${p => p.theme.transition};

  &:hover > div {
    box-shadow: ${p => p.theme.smallShadow};
  }

  &:active > div {
    box-shadow: none;
  }

  &:active {
    box-shadow: ${p => p.theme.innerShadow};
  }

  & > div {
    height: ${p => p.height || '45px'};
    width: ${p => p.width || '45px'};
    border-radius: 50%;
    overflow: hidden;
    border: ${p => p.border || 2}px solid ${p => p.theme.background};
    box-shadow: ${p => p.theme.shadow};
    transition: ${p => p.theme.transition}, border-color .6s cubic-bezier(0,0.8,0.4,1);
  }
`

export const InnerButton = props => {

  return(
    <Button {...props}>
      <div>
        {props.children}
      </div>
    </Button>
  )
}