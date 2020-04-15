import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  z-index: 2;
  opacity: .5;

  &:after {
    content: "";
    position: fixed;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    margin-top: -15px;
    margin-left: -15px;
    z-index: 3;
    border: solid 1px transparent;
    border-top-color: #6D7587;
    border-left-color: #6D7587;
    border-radius: 100%;
    animation: ${rotate} 1s linear infinite;
  }
`

export const Preloader = () => {
  return (
    <Spinner />
  )
} 