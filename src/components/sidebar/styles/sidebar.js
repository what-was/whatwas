import styled from 'styled-components/macro';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  max-width: 240px;
  width: 100%;
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
  a {
    text-decoration: none;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0 24px;
  cursor: pointer;
  font-weight: ${(props) => (props.status === 'active' ? '600' : '500')};
  background-color: ${(props) =>
    props.status === 'active' ? '#fffffe' : 'transparent'};

  color: #191818;

  font-size: 16px;

  a {
    display: flex;
    align-items: center;
    color: #232323;
    padding: 9px 0;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    #more-btn {
      display: flex;
    }
  }
  &:focus {
    outline: 0;
  }
`;

export const BoardName = styled.p`
  font-size: 14px;
  margin: 0 0 0 5px;
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
  display: ${(props) => (props.hover ? 'flex' : 'none')};
  align-items: center;
  font-size: 1.2rem;
  margin-left: auto;
`;

export const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: flex-end;
  ${'' /* margin: auto 5px 0 0; */}
  margin-right: 10px;
  padding: 5px;
  font-size: 1.3rem;
  align-self: flex-end;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #dfddda;
    border-radius: 5px;
  }

  &:focus {
    border: 0;
    outline: 0;
  }

  @media (max-width: 1000px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;
