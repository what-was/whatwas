import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #16161a;
  color: #94a1b2;
  font-size: 16px;  
}
::selection {
  color: #fffffe;
  background-color: #f25042;
}`;
