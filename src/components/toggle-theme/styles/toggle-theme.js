import styled from 'styled-components/macro';

const localTheme = window.localStorage.getItem('theme');

export const Container = styled.div`
  margin-right: 20px;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    background-color: ${localTheme === 'light' ? '#fffffe' : 'black'};
  }
  svg {
    color: ${localTheme === 'light' ? '#232323' : '#fffffe'};
    height: 24px;
    width: auto;
  }
`;
