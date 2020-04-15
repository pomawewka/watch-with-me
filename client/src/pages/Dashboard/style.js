import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  fill: ${props => props.theme.color};
  transition: ${props => props.theme.transition};
  height: 100%;
  box-sizing: border-box;
`