import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  transition: ${props => props.theme.transition};
  box-sizing: border-box;
`

export const Title = styled.h1`
  color: ${props => props.theme.background};
  font-size: calc(45px + (100 - 45) * ((100vw - 768px) / (1920 - 768)));
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  text-shadow: ${props => props.theme.textShadow};
  transition: ${props => props.theme.transition};
  letter-spacing: .05em;

  > .first-line {
    letter-spacing: .1em;
  }
  > .second-line {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .col {
    text-align: left;
    line-height: 1.05;
    margin-left: .2em;
  }
  .col div:first-child {
    font-size: .7em;
  }
  .sub-title {
    font-size: .5em;
    text-transform: none;
    letter-spacing: .1em;
  }
`

export const SignUp = styled.div`
  margin: 2em 0 1em;
  text-align: center;
  font-size: calc(18px + (22 - 18) * ((100vw - 768px) / (1920 - 768)));
`