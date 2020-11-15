import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 190px;
  height: calc(100vh - 100px);
`;

export const BoardContainer = styled.div`
  display: flex;
  padding: 5px 10px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  max-height: calc(100vh - 200px);
  overflow: hidden auto;
`;

export const ListItem = styled.li`
  list-style-type: none;
  padding: 10px 28px;
  cursor: pointer;

  ${'' /* ${(props) =>
    props.status === 'active' ? 'font-weight: 700' : 'font-weight: 400'} */}

  &:hover {
    background-color: #fffdfc;
  }
  &:focus {
    outline: 0;
  }
`;

export const BoardName = styled.p`
  font-weight: 600;
  font-size: 1rem;
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
  border-top: 1px solid #e3deda;
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
