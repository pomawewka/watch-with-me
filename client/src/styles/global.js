import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  body {
    overflow: hidden;
  }

  #root {
    height: 100vh;
    font: 125% 'Montserrat', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-user-drag: none;
    user-select: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 400;
    line-height: 1;
  }

  h1 {

  }

  h2 {

  }

  h3 {
    font-size: 2rem;
  }

  b, strong {
    font-weight: 500;
  }

  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
  }

  a, img {
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -moz-user-select: none;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  :focus {
    outline: 0;
  }

  ::selection {
    background: #ffe7e7;
  }

  ::-moz-selection {
    background: #ffe7e7;
  }

  button {
    padding: 0;
    border: 0;
    color: inherit;
    background-color: inherit;
    font: inherit;
  }

  input {
    width: 100%;
    padding: .6rem 1.2rem;
    background-color: transparent;
    border-radius: 2rem;
    border: none;
    color: ${({theme}) => theme.color};
    transition: ${({theme}) => theme.transition};
    box-sizing: border-box;
  }

  input:hover,
  input:focus {
    box-shadow: inset 2px 2px 4px ${({theme}) => theme.shadowsColor}, inset -2px -2px 4px ${({theme}) => theme.lightsColor};
  }
  
  #root, a, label, input, button {
    cursor: none;
  }

  [disabled] {
    pointer-events: none;
  }

  svg {
    transition: fill .6s cubic-bezier(0,0.8,0.4,1)
  }

  /* Change Autocomplete styles in Chrome*/
  input:-webkit-autofill {
    -webkit-text-fill-color: ${({theme}) => theme.color};
    transition: ${({theme}) => theme.transition}, background-color 0s ease 1000s;
  }
`