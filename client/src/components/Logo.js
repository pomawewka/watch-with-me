import React from 'react'
import styled from 'styled-components'

const LogoText = styled.h2`
  color: ${props => props.theme.background};
  font-weight: 900;
  font-size: 3rem;
  letter-spacing: .5rem;
  text-shadow: 0.04em 0.04em 0.08em ${p => p.theme.shadowsColor}, -0.04em -0.04em 0.08em ${p => p.theme.lightsColor};
  transition: ${props => props.theme.transition};
`

export const Logo = () => {
  return (
    <LogoText>W/M</LogoText>
  )
}