import styled from 'styled-components/macro';

export const Container = styled.section`
  height: ${(props) => (props.open ? '100%' : '2.7rem')};
  width: ${(props) => (props.open ? '100%' : '8.7rem')};
  background-color: #181818;
  border-radius: ${(props) => (props.open ? '15px' : '50px')};
  transition: 0.4s all ease-in;
  margin: 1rem 0.75rem 2rem;
  flex-grow: 1;
`;

export const CTAButton = styled.div`
  background-color: #181818;
  display: ${(props) => (props.open ? 'none' : 'flex')};
  opacity: ${(props) => (props.open ? '0' : '1')};
  padding: 10px 20px;
  align-items: center;
  width: 6.2rem;
  border-radius: 40px;
  cursor: pointer;
  transition: 0.4s all ease-in-out;
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

export const Title = styled.input`
  -webkit-tap-highlight-color: transparent;
  margin: 0 0 1rem 20px;
  font-size: 2rem;
  width: 100%;
  max-width: calc(100% - 3rem);
  background-color: transparent;
  color: #fffffe;
  outline: 0;
  font-weight: 800;
  border: 0;
  display: ${(props) => (props.open ? 'block' : 'none')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  transition: 2s opacity ease-in;
  &:focus::placeholder {
    color: transparent;
  }
`;

export const Input = styled.textarea`
  display: ${(props) => (props.open ? 'block' : 'none')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  margin: 0 auto;
  width: 100%;
  max-width: calc(100% - 3rem);
  max-height: 18rem;
  height: 100%;
  outline: 0;
  border: 0;
  background: transparent;
  caret-color: #fffffe;
  color: #fffffe;
  resize: none;
  overflow: hidden;
  transition: 2s opacity ease-in;
  &:focus::placeholder {
    color: transparent;
  }
`;

export const Close = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  margin: 10px 10px auto auto;
  color: white;
  height: 1.2rem;
  width: 1.2rem;
  cursor: pointer;
  position: relative;
  svg {
    color: white;
    height: 1.2rem;
    width: 1.2rem;
  }
  &:hover svg {
    color: grey;
  }
`;
