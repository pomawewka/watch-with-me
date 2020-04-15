import React from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const StyledCursor = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  margin-left: -10px;
  margin-top: -10px;
  border-radius: 50%;
  z-index: 1000;
  will-change: transform;
  pointer-events: none;
  box-shadow: ${props => props.theme.smallShadow};
`

export class Cursor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clientX: -100,
      clientY: '50%'
    }
    this.cursorRef = React.createRef()
  }

  onMouseMove = e => {
    this.setState({
      clientX: e.clientX,
      clientY: e.clientY
    })
  }

  mouseRender = () => {
    gsap.to(this.cursorRef.current, {
      duration: 1,
      ease: "power4.out",
      x: this.state.clientX,
      y: this.state.clientY
    })
    requestAnimationFrame(this.mouseRender)
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.onMouseMove)
    requestAnimationFrame(this.mouseRender)
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.onMouseMove)
  }

  render() {
    return (
      <StyledCursor ref={this.cursorRef}/>
    )
  }
}