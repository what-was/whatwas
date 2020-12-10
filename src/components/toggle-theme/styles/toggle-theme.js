import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 20px;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 50px;
  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
  svg {
    color: ${({ theme }) => theme.text};
    height: 24px;
    width: auto;
  }
`;
