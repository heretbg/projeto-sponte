import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #e6e6e6;
    -webkit-font-smoothing: antialiased !important;
  }

  body, label input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  label {
    font-weight: bold;
  }

  button {
    cursor: pointer;
  }

  h1 {
    text-align: center;
    color: #775afd;
  }
`;