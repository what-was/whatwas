import styled from 'styled-components/macro';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const ButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 14px;
  cursor: pointer;
  color: #232323;
  svg {
    font-size: 0.75rem;
    margin-right: 5px;
  }

  &:hover {
    background-color: #fffffe;
  }
`;
export const BoardList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #ede8e4;
  list-style: none;
  padding: 0;
  li {
    padding-left: 40px;
    &:hover {
      background-color: #fffdfc;
    }
  }
`;

export const Title = styled.h5`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  &::selection {
    background-color: transparent !important;
    color: black !important;
  }
`;
