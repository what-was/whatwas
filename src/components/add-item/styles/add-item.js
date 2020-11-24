import styled from 'styled-components/macro';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: auto;
  max-width: 960px;
  border-radius: 15px;
  background-color: #232323;
  ${
    '' /* backdrop-filter: blur(10px);
  background-color: rgba(35, 35, 35, 0.9); */
  }
  ${'' /* box-shadow: 0px 10px 60px -10px rgba(220, 187, 160, 1); */}
  top: 60px;
  left: 60px;
  right: 60px;
  margin-right: auto;
  height: calc(100% - 15rem);
  padding: 3rem 3rem;
`;

// Select collection dropdown

// Title Input
export const Title = styled.input`
  -webkit-tap-highlight-color: transparent;
  margin: 1rem 0 0;
  font-size: 3rem;
  background: transparent;
  color: #fffffe;
  outline: 0;
  font-weight: 800;
  border: 0;

  &:focus::placeholder {
    color: transparent;
  }
`;

// Board Description
export const Description = styled.input`
  -webkit-tap-highlight-color: transparent;
  margin: 1.5rem 0;
  font-size: 15px;
  background: transparent;
  color: #fffffe;
  outline: 0;
  font-weight: 400;
  border: 0;

  &:focus::placeholder {
    color: transparent;
  }
`;

// Submit icon
export const Submit = styled.button`
  margin: auto 0 0 auto;
  background-color: #fffffe;
  padding: 15px 25px;
  border-radius: 50px;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: 200ms all ease;
  font-weight: 600;
  &:hover {
    background-color: #dbdbdb;
  }
`;

// Close icon
export const Close = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  right: 1rem;
  top: 1rem;
  position: absolute;
  transition: 200ms all ease;
  cursor: pointer;
  padding: 0.5rem;

  border-radius: 20px;
  svg {
    color: white;
    height: 1.5rem;
    width: 1.5rem;
  }
  &:hover {
    background-color: #3c3d3d;
  }
`;

// Add Note
export const NoteContainer = styled.section`
  height: ${(props) => (props.hasOpen ? '100%' : '2.75rem')};
  max-width: ${(props) => (props.hasOpen ? '940px' : '8.1rem')};
  width: 100%;
  background-color: #181818;
  border-radius: ${(props) => (props.hasOpen ? '15px' : '50px')};
  transition: 0.3s all ease-in-out;
  margin: 0 0 2rem;
  padding: ${(props) => (props.hasOpen ? '0 10px' : '0')};
  justify-content: ${(props) => (props.hasOpen ? 'flex-start' : 'center')};
`;

export const CTAButton = styled.div`
  display: ${(props) => (props.hasOpen ? 'none' : 'flex')};
  align-items: center;
  padding: 10px 15px;
  border-radius: 40px;
  cursor: pointer;
  background-color: #181818;
  color: #fffffe;
  &:hover {
    background-color: #1c1b1b;
  }
  svg {
    height: 1.4rem;
    width: 1.4rem;
    font-weight: 600;
    color: white;
  }
`;

export const CTAText = styled.span`
  white-space: pre;
  color: white;
  font-weight: 500;
  margin: 0 0 0 5px;
`;

export const NoteTitle = styled.input`
  -webkit-tap-highlight-color: transparent;
  margin: ${(props) =>
    props.addNote ? '1rem 0 1rem 20px' : '0rem 0 1rem 20px'};
  font-size: ${(props) => (props.addNote ? '2.5rem' : '2rem')};
  width: 100%;
  max-width: calc(100% - 3rem);
  background-color: transparent;
  color: #fffffe;
  outline: 0;
  font-weight: 800;
  border: 0;
  display: ${(props) => (props.hasOpen ? 'block' : 'none')};
  opacity: ${(props) => (props.hasOpen ? '1' : '0')};
  transition: 2s opacity ease-in;
  &:focus::placeholder {
    color: transparent;
  }
`;

export const Input = styled.textarea`
  display: ${(props) => (props.hasOpen ? 'block' : 'none')};
  opacity: ${(props) => (props.hasOpen ? '1' : '0')};
  margin: 0 auto;
  width: 100%;
  max-width: calc(100% - 3rem);
  max-height: ${(props) => (props.addNote ? '100%' : '18rem')};
  height: 100%;
  outline: 0;
  border: 0;
  background: transparent;
  caret-color: #fffffe;
  color: #fffffe;
  resize: none;
  overflow: hidden;
  line-height: 1.5;
  font-weight: normal;
  transition: 2s opacity ease-in;
  &:focus::placeholder {
    color: transparent;
  }
`;

export const NoteClose = styled.div`
  display: ${(props) => (props.hasOpen ? 'block' : 'none')};
  color: white;
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  position: relative;
  margin: 10px 0px auto auto;

  svg {
    color: white;
    height: 1.5rem;
    width: 1.5rem;
  }
  &:hover svg {
    color: grey;
  }
`;
