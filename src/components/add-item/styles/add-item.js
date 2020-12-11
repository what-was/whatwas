import styled from 'styled-components';

export const Container = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  height: calc(100% - 15rem);
  margin-left: auto;
  margin-right: auto;
  padding: 3rem 3rem;
  top: 60px;
  right: 60px;
  left: 60px;
  background-color: #232323;
  border-radius: 15px;
  z-index: 99999;

  @media (max-width: 600px) {
    position: fixed;
    padding: 1.5rem;
    left: 15px;
    right: 15px;
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
  font-size: 3rem;
  color: #fffffe;
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
  }
`;

// Board Description
export const Description = styled.input`
  margin: 1.5rem 0;
  font-size: 15px;
  color: #fffffe;
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
  }
`;

// Submit icon
export const Submit = styled.button`
  margin: auto 0 0 auto;
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

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: white;
  }
  &:hover {
    background-color: #3c3d3d;
  }
`;

// Add Note
export const NoteContainer = styled.section`
  justify-content: ${(props) => (props.hasOpen ? 'flex-start' : 'center')};
  max-width: ${(props) => (props.hasOpen ? '940px' : '8.1rem')};
  width: 100%;
  height: ${(props) => (props.hasOpen ? '100%' : '2.75rem')};
  margin: 0 0 2rem;
  padding: ${(props) => (props.hasOpen ? '0 10px' : '0')};
  background-color: #181818;
  border-radius: ${(props) => (props.hasOpen ? '15px' : '50px')};
  transition: 0.3s all ease-in-out;
`;

export const CTAButton = styled.div`
  display: ${(props) => (props.hasOpen ? 'none' : 'flex')};
  align-items: center;
  padding: 10px 15px;
  color: #fffffe;
  background-color: #181818;
  border-radius: 40px;
  cursor: pointer;
  &:hover {
    background-color: #1c1b1b;
  }
  svg {
    width: 1.4rem;
    height: 1.4rem;
    color: white;
    font-weight: 600;
  }
`;

export const CTAText = styled.span`
  margin: 0 0 0 5px;
  color: white;
  font-weight: 500;
  white-space: pre;
`;

export const NoteTitle = styled.input`
  display: ${(props) => (props.hasOpen ? 'block' : 'none')};
  margin: ${(props) =>
    props.addNote ? '1rem 0 1rem 20px' : '0rem 0 1rem 20px'};
  padding: 0;
  color: #fffffe;
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
      color: #424242;
    }
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
  color: #fffffe;
  line-height: 1.5;
  font-weight: normal;
  background: transparent;
  caret-color: #fffffe;
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
  margin: 10px 0px auto auto;
  color: white;
  cursor: pointer;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: white;
  }
  &:hover svg {
    color: grey;
  }
`;
