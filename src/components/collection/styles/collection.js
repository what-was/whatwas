import styled from 'styled-components/macro';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  padding: 0 0 6px 0;
  border-bottom: 1px solid #ede7e1;
  margin-bottom: 12px;
`;

export const ButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 24px;
  cursor: pointer;
  color: #191818;
  svg {
    font-size: 0.75rem;
    margin-right: 6px;
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

export const AddCollection = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  color: #232323;
  background-color: #f8f5f2;
  border: 0;
  border-bottom: 1px solid #ede7e1;
  padding: 5px 24px;
  cursor: pointer;
  align-items: center;
  svg {
    height: 18px;
    width: auto;
    margin-right: 6px;
  }

  &:hover {
    background-color: #fffdfc;
  }
  &:focus {
    outline: 0;
  }
`;

export const AddBoard = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  color: #232323;
  background-color: #f8f5f2;
  border: 0;
  padding: 5px;
  margin-left: auto;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 0;
    height: 18px;
    width: auto;
  }

  &:hover {
    background-color: #fffdfc;
  }
  &:focus {
    outline: 0;
  }
`;
