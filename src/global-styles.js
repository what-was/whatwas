import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
  font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8f5f2;
  color: #222525;
  font-size: 16px;  
}
::selection {
  color: #fffffe;
  background-color: #a81d1d;
}`;
