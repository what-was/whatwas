import styled from 'styled-components/macro';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #ede7e1;
  margin-bottom: 12px;
`;

export const ButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  cursor: pointer;
  color: #191818;
  svg {
    font-size: 0.75rem;
  }
`;
export const BoardList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #edeae6;
  list-style: none;
  padding: 0;
  li {
    padding-left: 36px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
`;

export const Title = styled.h5`
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  &::selection {
    background-color: transparent !important;
    color: black !important;
  }
`;
