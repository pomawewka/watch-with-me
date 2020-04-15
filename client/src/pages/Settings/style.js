import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: ${props => props.theme.shadow};
  transition: ${props => props.theme.transition};

  h3 {
    margin-bottom: 1rem;
    text-align: center;
  }

  input[type='file'] {
    position: absolute;
    visibility: hidden;
  }

  .user-settings {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user-data {
    width: 75%;
  }
  
  .user-data > div  {
    display: flex;
    align-items: center;
    height: 50px;
  }

  .user-data > div:last-child {
    padding-bottom: 0;
  }

  .user-data > div > b {
    min-width: 140px;
  }

  .user-data > div > span {
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .user-data > div > .with-input {
    margin-left: -20px;
  }
`