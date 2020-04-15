import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: ${props => props.theme.shadow};
`

export const Card = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}