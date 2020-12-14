import styled from 'styled-components';

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
  margin: 0;
  color: ${({ theme }) => theme.title};
  font-size: 24px;
  font-weight: 700;
  cursor: default;
`;

export const AddNoteButton = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 2rem;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.title};
  font-size: 16px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.body};
  border-radius: 50px;
  cursor: pointer;
  transition: 100ms all ease;

  p {
    margin: 0;
  }
  svg {
    width: auto;
    height: 16px;
    margin-right: 0.25rem;
    font-weight: 600;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
  }

  @media (max-width: 770px) {
    position: absolute;
    right: 30px;
    bottom: 25px;
    margin: 0;
    margin-left: auto;
    padding: 10px;
    background-color: ${({ theme }) => theme.accent};
    box-shadow: 0 5px 20px -7px ${({ theme }) => theme.boxShadow};
    z-index: 99;
    svg {
      height: 30px;
      margin: 0;
      color: #fffffe;
    }

    > :not(svg) {
      display: none;
    }
  }
`;

export const NoteContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

export const NotesList = styled.div`
  display: flex;
  flex: ${(props) => (props.sidebarOpen ? '0 1 262px' : '0 1 310px')};
  flex-direction: column;
  margin: 5px 5px;
  padding: 1rem 1.25rem;
  border-radius: 10px;
  text-decoration: none;
  background-color: ${(props) => backgroundColor(props.color)};
  cursor: pointer;
  transition: box-shadow 350ms ease;

  a {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
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
  align-items: flex-start;
  width: auto;
  margin: 0;
  padding: 0 0 5px 0;
  color: ${({ theme }) => theme.title};
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  cursor: pointer;
  word-wrap: normal;
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
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  overflow: hidden;

  .ql-editor {
    padding: 0;

    &::spelling-error {
      text-decoration: none;
    }

    a {
      color: ${({ theme }) => theme.accent};

      &:hover {
        color: ${({ theme }) => theme.accentHover};
      }
    }

    h1 {
      font-size: 18px;
    }
    h2 {
      font-size: 16px;
    }
    p {
      cursor: pointer;
    }
  }
`;

export const Favorite = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  height: auto;
  padding: 5px;
  cursor: pointer;

  svg {
    width: auto;
    height: 1.5rem;
  }
`;

export const NoteUpdatedDate = styled.div`
  margin-top: 5px;
  font-size: 12px;
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
  margin-top: 40px;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.warnText};
`;

export const EmptyImage = styled.img`
  width: auto;
  height: ${(props) => props.height};
  margin-top: 20px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;
