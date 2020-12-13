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
    position: absolute;
    height: calc(100vh - 177px);
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
  max-height: calc(100vh - 100px);
  height: 100%;
  margin-top: 0;
  padding: 0;
  overflow: hidden auto;
  a {
    text-decoration: none;
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0 12px 0 24px;
  max-width: 100%;
  color: ${(props) =>
    props.status !== 'active'
      ? ({ theme }) => theme.shadowedText
      : ({ theme }) => theme.text} !important;
  font-size: 16px;
  font-weight: ${(props) => (props.status === 'active' ? '600' : '500')};
  background-color: ${(props) =>
    props.status === 'active'
      ? ({ theme }) => theme.backgroundHover
      : 'transparent'};
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }

  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 9px 0;
    color: inherit;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
  }
  &:focus {
    outline: 0;
  }
`;

export const BoardName = styled.p`
  width: 100%;
  margin: 0;
  font-size: 14px;
  line-break: auto;
  &::selection {
    background-color: transparent !important;
    color: black !important;
  }
`;

export const AddBoard = styled.button`
  display: flex;
  align-items: center;
  margin: auto 0 0;
  padding: 15px 24px;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;
  svg {
    width: auto;
    height: 18px;
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
  margin-left: auto;
  font-size: 1.2rem;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.greyText};
    margin: 0;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-self: flex-end;
  align-items: flex-end;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 1.3rem;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.background};
    border-radius: 5px;
  }

  &:focus {
    border: 0;
    outline: 0;
  }

  @media (max-width: 1000px) {
    margin-bottom: 10px;
    font-size: 1rem;
  }
`;
