import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 190px;
  height: calc(100vh - 75px);
  border-right: 1px solid #ede7e1;
`;

export const BoardContainer = styled.div`
  display: flex;
  padding: 5px 10px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  max-height: calc(100vh - 40px);
  overflow: hidden auto;
  margin-top: 0;
`;

export const ListItem = styled.li`
  list-style-type: none;
  padding: 5px 28px;
  cursor: pointer;
  font-weight: ${(props) => (props.status === 'active' ? '700' : '500')};

  &:hover {
    background-color: #fffdfc;
  }
  &:focus {
    outline: 0;
  }
`;

export const BoardName = styled.p`
  font-size: 16px;
  color: #222525;
  margin: 0;
`;

export const AddBoard = styled.button`
  display: flex;
  font-weight: 500;
  font-size: 1rem;
  color: #222525;
  background-color: #f8f5f2;
  border: 0;
  border-top: 1px solid #ede7e1;
  padding: 15px 28px;
  cursor: pointer;
  margin: auto 0 0;
  align-items: center;
  svg {
    height: 20px;
    width: auto;
    margin-right: 5px;
  }

  &:hover {
    background-color: #fffdfc;
  }
  &:focus {
    outline: 0;
  }
`;
