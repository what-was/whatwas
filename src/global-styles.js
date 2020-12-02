import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8f5f2;
  line-height: 1.5;
  color: #222525;
  font-size: 16px;  
}
::selection {
  color: #fffffe;
  background-color: #a81d1d;
}
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f7f4f0;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f7f4f0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #313030;
  }


`;
