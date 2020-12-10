import styled from 'styled-components';

export const Container = styled.nav`
  display: ${(props) => (props.openStatus ? 'flex' : 'none')};
  flex-direction: column;
  max-width: 240px;
  min-width: 240px;
  width: 100%;
  height: calc(100vh - 70px);
  border-right: 1px solid ${({ theme }) => theme.border};

  &::selection {
    background-color: transparent !important;
    color: black !important;
  }
  @media (max-width: 780px) {
    height: calc(100vh - 101px);
  }

  @media (max-width: 600px) {
    height: calc(100vh - 177px);
    position: absolute;
    background-color: ${({ theme }) => theme.body};
    box-shadow: 15px 15px 30px -15px rgba(0, 0, 0, 0.4);
    z-index: 999;
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
  padding: 0 24px 0 24px;
  max-width: 100%;
  cursor: pointer;
  font-weight: ${(props) => (props.status === 'active' ? '600' : '400')};
  background-color: ${(props) =>
    props.status === 'active'
      ? ({ theme }) => theme.backgroundHover
      : 'transparent'};
  color: ${({ theme }) => theme.text};
  font-size: 16px;

  svg {
    width: 18px;
    height: 18px;
    stroke: ${({ theme }) => theme.text};
    margin-right: 10px;
  }

  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text};
    padding: 9px 0;
    width: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
    svg {
      stroke: ${({ theme }) => theme.text};
    }
  }
  &:focus {
    outline: 0;
  }
`;

export const BoardName = styled.p`
  font-size: 14px;
  width: 100%;
  line-break: anywhere;
  margin: 0;
  &::selection {
    background-color: transparent !important;
    color: black !important;
  }
`;

export const AddBoard = styled.button`
  display: flex;
  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 15px 24px;
  cursor: pointer;
  margin: auto 0 0;
  align-items: center;
  svg {
    height: 18px;
    width: auto;
    margin-right: 12px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
  }
  &:focus {
    outline: 0;
  }
`;

export const MoreButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin-left: auto;
  svg {
    margin: 0;
  }
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
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: ${({ theme }) => theme.background};
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
