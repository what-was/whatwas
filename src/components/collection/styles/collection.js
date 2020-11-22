import styled from 'styled-components/macro';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
export const ButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 14px 5px 28px;
  cursor: pointer;
  &:hover {
    background-color: #fffffe;
  }
`;
export const BoardList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #e0dcd7;
  list-style: none;
  padding: 5px 0;
  li {
    padding: 5px 40px;

    &:hover {
      background-color: #d1ccc7;
    }
  }
`;

export const Title = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  &::selection {
    background-color: transparent !important;
    color: black !important;
  }
`;
