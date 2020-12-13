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

export const UpperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 45rem;
  width: 100%;
  margin: 0 auto 1.5rem;

  #noteColorFilter {
    margin: 0;
  }

  @media (max-width: 860px) {
    margin-bottom: 20px;
  }

  @media (max-width: 360px) {
    #noteColorFilter {
      p {
        margin-right: 5px;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: calc(100vh - 162px);
  margin: 0 28px 28px;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 20px;
  box-shadow: 0px 15px 40px -15px ${({ theme }) => theme.boxShadow};
  overflow-y: auto;
  overflow-x: hidden;

  ${UpperContainer}:first-of-type {
    margin-bottom: 10px;
  }

  #noteMoreButton {
    svg {
      width: 30px;
      height: auto;
    }
  }

  @media (max-width: 600px) {
    max-width: 550px;
    height: calc(100vh - 220px);
    margin: 0 15px;
    padding: 1rem 1.5rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  max-width: 45rem;
  width: 100%;
  margin: 0 auto;

  .quill {
    width: 100%;
  }

  .ql-editor {
    padding: 3rem 2rem;
    font-size: 16px;
    font-family: 'Georgia', 'Cambria', 'Times New Roman', serif;
    line-height: 1.6;
    letter-spacing: -0.003em;
    clear: both;
    a {
      display: inline-block;
      color: ${({ theme }) => theme.accent};
      cursor: pointer;

      &:visited {
        color: ${({ theme }) => theme.accent};
      }
      &::before {
        font-family: sans-serif;
      }
    }

    h1 {
      font-size: 2rem;
      line-height: 1.2;
    }

    h2 {
      font-size: 1.3rem;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 45rem;
  width: 100%;
  margin: 20px auto 0;
  padding: 0 2rem;

  @media (max-width: 1000px) {
    padding: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  padding: 0;
  color: ${({ theme }) => theme.title};
  font-size: 40px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: -0.015em;
  white-space: pre-wrap;
  word-break: break-word;
  background: linear-gradient(
    transparent 95%,
    ${(props) => backgroundColor(props.color)} 5%
  );
  ${'' /* margin: 0 auto; */}
  border: 0;
  &:focus {
    border: 0;
    outline: 0;
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const NoteUpdatedDate = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.shadowedText};
  font-size: 14px;
  @media (max-width: 860px) {
    ${'' /* margin-bottom: 15px; */}
  }
`;

export const Text = styled.p`
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0 0 40px auto;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.buttonText};
  font-size: 16px;
  background-color: ${({ theme }) => theme.accent};
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 200ms ease;
  &:hover {
    background-color: ${({ theme }) => theme.accentHover};
  }
  &:focus {
    outline: 0;
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;

  *::after {
    margin: 0 !important;
    border-width: 16px !important;
    border-color: ${({ theme }) => theme.text} transparent !important;
  }
`;
