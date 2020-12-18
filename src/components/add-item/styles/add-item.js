import styled from 'styled-components/macro';

const backgroundColor = (color) => {
  switch (color) {
    case 'yellow':
      return ({ theme }) => theme.yellow + '7f';
    case 'blue':
      return ({ theme }) => theme.blue + '7f';
    case 'pink':
      return ({ theme }) => theme.pink + '7f';
    case 'orange':
      return ({ theme }) => theme.orange + '7f';
    case 'green':
      return ({ theme }) => theme.green + '7f';
    case 'grey':
      return ({ theme }) => theme.grey + '7f';
    default:
      return ({ theme }) => theme.default + '7f';
  }
};

export const Container = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  height: calc(100% - 15rem);
  margin-left: auto;
  margin-right: auto;
  top: 60px;
  right: 60px;
  left: 60px;
  box-shadow: 0px 10px 40px -5px ${({ theme }) => theme.boxShadow};
  background: ${(props) => backgroundColor(props.color)};
  backdrop-filter: blur(20px);
  border-radius: 15px;
  z-index: 99999;

  .open {
    display: block;
  }

  .close {
    display: none;
  }

  .ql-editor {
    margin: 0 0 1rem 0;
    color: ${({ theme }) => theme.text};
    overflow-x: auto;
    height: 100%;
    padding: 0 3rem 3rem;
    overflow-y: auto;
    > * {
      font-size: 16px;
    }

    &::spelling-error {
      text-decoration: none;
    }

    a {
      color: ${({ theme }) => theme.accent};
    }

    .ql-blank::before {
      color: ${({ theme }) => theme.greyText};
      left: 3rem;
    }

    &::placeholder {
      color: ${({ theme }) => theme.text} !important;
    }

    @media (max-width: 600px) {
      padding: 0 1rem;
    }
  }

  @media (max-width: 600px) {
    position: fixed;
    padding: 1.5rem;
    left: 15px;
    right: 15px;
    .ql-editor.ql-blank::before {
      left: 16px !important;
    }
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// Select collection dropdown

// Title Input
export const Title = styled.input`
  margin: 1rem 0 0;
  padding: 1.5rem 3rem;
  color: ${({ theme }) => theme.title};
  font-size: 3rem;
  font-weight: 800;
  background: transparent;
  border: 0;
  outline: 0;
  -webkit-tap-highlight-color: transparent;

  &:focus::placeholder {
    color: transparent;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 16px;
    padding: 0rem;
  }
`;

// Board Description
export const Description = styled.input`
  margin: 0 0 1.5rem;
  padding: 0 3rem;
  font-size: 15px;
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  background: transparent;
  outline: 0;
  border: 0;
  -webkit-tap-highlight-color: transparent;

  &:focus::placeholder {
    color: transparent;
  }

  @media (max-width: 600px) {
    line-break: anywhere;
    padding: 0;
  }
`;

// Submit icon
export const Submit = styled.button`
  margin: auto 3rem 3rem auto;
  padding: 15px 25px;
  cursor: pointer;
  color: ${({ theme }) => theme.buttonText};
  font-weight: 600;
  background-color: ${({ theme }) => theme.accent};
  border: 0;
  border-radius: 50px;
  outline: 0;
  transition: 200ms all ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentHover};
  }
  @media (max-width: 600px) {
    margin: auto 0.5rem 0.5rem auto;
  }
`;

// Close icon
export const Close = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.5rem;
  top: 1rem;
  right: 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: 200ms all ease;
  color: ${({ theme }) => theme.shadowedText};
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
  }
`;

// Add Note
export const NoteContainer = styled.section`
  justify-content: ${(props) => (props.hasOpen ? 'flex-start' : 'center')};
  max-width: ${(props) => (props.hasOpen ? '940px' : '8.1rem')};
  height: ${(props) => (props.hasOpen ? '100%' : '2.75rem')};
  margin: 0 3rem 2rem;
  padding: 0;
  box-shadow: 0px 10px 40px -10px ${({ theme }) => theme.smallBoxShadow};
  background-color: ${({ theme }) => theme.body};
  border-radius: ${(props) => (props.hasOpen ? '15px' : '50px')};
  transition: 0.3s all ease-in-out;

  @media (max-width: 600px) {
    margin: 0 0 1rem;
  }
`;

export const CTAButton = styled.div`
  display: ${(props) => (props.hasOpen ? 'none' : 'flex')};
  align-items: center;
  padding: 10px 15px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0px 10px 20px 0px ${({ theme }) => theme.smallBoxShadow};
  border-radius: 40px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
  }
  svg {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const CTAText = styled.span`
  margin: 0 0 0 5px;
  font-weight: 500;
  white-space: pre;
`;

export const NoteTitle = styled.input`
  display: ${(props) => (props.hasOpen ? 'flex' : 'none')};
  width: 86%;
  margin: ${(props) =>
    props.addNote ? '1rem 15px 1rem 15px' : '0 15px 1rem 15px'};
  color: ${({ theme }) => theme.title};
  font-size: ${(props) => (props.addNote ? '2.5rem' : '2rem')};
  font-weight: 800;
  background-color: transparent;
  border: 0;
  outline: 0;
  opacity: ${(props) => (props.hasOpen ? '1' : '0')};
  transition: 2s opacity ease-in;
  -webkit-tap-highlight-color: transparent;
  &:focus::placeholder {
    color: transparent;
  }
  @media (max-width: 720px) {
    &:focus::placeholder {
      color: ${({ theme }) => theme.greyText};
    }
  }
  @media (max-width: 600px) {
  }
`;

export const Input = styled.textarea`
  display: ${(props) => (props.hasOpen ? 'block' : 'none')};
  max-width: calc(100% - 1rem);
  width: 100%;
  max-height: ${(props) => (props.addNote ? '100%' : '18rem')};
  height: 100%;
  margin: 0 20px 10px;
  padding: 0;
  color: ${({ theme }) => theme.text};
  line-height: 1.5;
  font-weight: normal;
  background: transparent;
  caret-color: ${({ theme }) => theme.text};
  border: 0;
  outline: 0;
  opacity: ${(props) => (props.hasOpen ? '1' : '0')};
  resize: none;
  transition: 2s opacity ease-in;
  &:focus::placeholder {
    color: transparent;
  }
`;

export const NoteClose = styled.div`
  position: relative;
  display: ${(props) => (props.hasOpen ? 'block' : 'none')};
  width: 1.5rem;
  height: 1.5rem;
  margin: 10px 10px auto auto;
  padding: 5px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  border-radius: 20px;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
  }
`;
