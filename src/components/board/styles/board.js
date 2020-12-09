import styled from 'styled-components/macro';

const backgroundColor = (color) => {
  switch (color) {
    case 'yellow':
      return ({ theme }) => theme.yellow;
    case 'blue':
      return ({ theme }) => theme.blue;
    case 'pink':
      return ({ theme }) => theme.pink;
    case 'orange':
      return ({ theme }) => theme.orange;
    case 'green':
      return ({ theme }) => theme.green;
    case 'grey':
      return ({ theme }) => theme.grey;
    default:
      return ({ theme }) => theme.default;
  }
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 5px 1rem;
  @media (max-width: 720px) {
    margin: 0 5px 10px;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
  margin: 0;
  cursor: default;
`;

export const AddNoteButton = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.title};
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 0 2rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: 100ms all ease;

  p {
    margin: 0;
  }
  svg {
    height: 16px;
    width: auto;
    margin-right: 0.25rem;
    font-weight: 600;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
  }

  @media (max-width: 770px) {
    position: absolute;
    bottom: 25px;
    right: 30px;
    margin: 0;
    margin-left: auto;
    padding: 10px;
    z-index: 99;
    box-shadow: 0 5px 20px -7px ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.accent};
    svg {
      color: #fffffe;
      height: 30px;
      margin: 0;
    }

    > :not(svg) {
      display: none;
    }
  }
`;

export const NoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const NotesList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 5px;
  border-radius: 10px;
  flex: ${(props) => (props.sidebarOpen ? '0 1 262px' : '0 1 310px')};
  padding: 1rem 1.25rem;
  cursor: pointer;
  text-decoration: none;
  transition: box-shadow 350ms ease;
  background-color: ${(props) => backgroundColor(props.color)};

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
  }

  &:hover {
    box-shadow: 0 10px 45px -20px ${({ theme }) => theme.smallBoxShadow};
  }

  @media (max-width: 1300px) {
    flex: ${(props) => (props.sidebarOpen ? '0 1 257px' : '0 1 240px')};
  }

  @media (max-width: 1000px) {
    flex: ${(props) => (props.sidebarOpen ? '0 1 275px' : '0 1 280px')};
  }

  @media (max-width: 600px) {
    flex: 0 1 430px;
    padding: 1rem 16px;
  }
`;

export const NoteTitle = styled.h2`
  display: flex;
  margin: 0;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
  color: ${({ theme }) => theme.title};
  cursor: pointer;
  padding: 0 0 5px 0;
  width: auto;
  align-items: flex-start;
  word-wrap: normal;
  ${
    '' /* &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => backgroundColor(props.color)};
    margin: 5px 10px auto 0;
    display: table;
  } */
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
`;

export const NoteSummary = styled.div`
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
  overflow: hidden;

  .ql-editor {
    padding: 0;
    p {
      cursor: pointer;
    }
  }
`;

export const Favorite = styled.div`
  position: relative;
  padding: 5px;
  height: auto;
  align-items: flex-end;
  display: flex;
  cursor: pointer;

  svg {
    height: 1.5rem;
    width: auto;
  }
`;

export const NoteUpdatedDate = styled.div`
  font-size: 12px;
  margin-top: 5px;
  color: ${({ theme }) => theme.shadowedText};
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.title};
`;

export const EmptyWarn = styled.div`
  font-size: 2rem;
  margin-top: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
`;

export const EmptyImage = styled.img`
  margin-top: 20px;
  width: auto;
  height: ${(props) => props.height};
`;
