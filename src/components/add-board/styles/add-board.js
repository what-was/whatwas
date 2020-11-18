import styled from 'styled-components/macro';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: auto;
  max-width: 960px;
  border-radius: 15px;
  background: #242526;
  box-shadow: 0px 10px 60px -10px rgba(220, 187, 160, 1);
  top: 60px;
  left: 60px;
  right: 60px;
  margin-right: auto;
  height: calc(100% - 19rem);
  padding: 3rem 3rem;
`;

// Select collection dropdown

// Title Input
export const Title = styled.input`
  -webkit-tap-highlight-color: transparent;
  margin: 2rem 0 0;
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
