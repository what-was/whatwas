import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 20px;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
  svg {
    width: auto;
    height: 24px;
    color: ${({ theme }) => theme.text};
  }
`;
