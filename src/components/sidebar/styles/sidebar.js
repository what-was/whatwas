import styled from 'styled-components/macro';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: calc(100vh - 70px);
  border-right: 1px solid #ede7e1;

  &::selection {
    background-color: transparent !important;
    color: black !important;
  }
`;

export const BoardContainer = styled.aside`
  display: flex;
  padding: 5px 24px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  max-height: calc(100vh - 100px);
  overflow: hidden auto;
  margin-top: 0;
  height: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 9px 24px;
  cursor: pointer;
  font-weight: ${(props) => (props.status === 'active' ? '700' : '500')};
  background-color: ${(props) =>
    props.status === 'active' ? '#fffffe' : 'transparent'};

  color: #191818;
  &:hover {
    background-color: #fffdfc;
  }
  &:focus {
    outline: 0;
  }

  &:hover #more-btn {
    display: flex;
  }
`;

export const BoardName = styled.p`
  font-size: 11pt;
  margin: 0;
  width: 100%;
  &::selection {
    background-color: transparent !important;
    color: black !important;
  }
`;

export const AddBoard = styled.button`
  display: flex;
  font-weight: 500;
  font-size: 1rem;
  color: #232323;
  background-color: #f8f5f2;
  border: 0;
  border-top: 1px solid #ede7e1;
  padding: 15px 28px;
  cursor: pointer;
  margin: auto 0 0;
  align-items: center;
  svg {
    height: 18px;
    width: auto;
    margin-right: 12px;
  }

  &:hover {
    background-color: #fffdfc;
  }
  &:focus {
    outline: 0;
  }
`;

export const MoreButton = styled.div`
  display: none;
  align-items: center;
  font-size: 1.2rem;
  z-index: 99;
`;
