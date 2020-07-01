import { createGlobalStyle } from 'styled-components';
import bg from '../assets/backg.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }

  body{
    background: white url(${bg}) no-repeat 50% top;
    background-size: 100%;

    -webkit-font-smoothing: antialised;
  }

  body, input, button{
    font: 16px Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }

`;
