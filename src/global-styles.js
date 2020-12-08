import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.body};
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  font-size: 16px;  
}
::selection {
  color: #fffffe;
  background-color: #a81d1d;
}
  &::-webkit-scrollbar-track {
    ${'' /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */}
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #c1c1c1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
  }

.quill {
 font-family: 'Roboto','Helvetica', 'Arial', sans-serif;
}
`;
