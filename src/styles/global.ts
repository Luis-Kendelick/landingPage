import { createGlobalStyle } from 'styled-components';
import bg from '../assets/backg.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: transparent url(${bg}) no-repeat scroll top;
    -webkit-font-smoothing: antialised;
  }

  body, input, button{
    font: 16px Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }

`;
