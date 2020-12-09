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
  flex-grow: 1;
  margin: 0 28px 28px;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 20px;
  height: calc(100vh - 162px);
  box-shadow: 0px 15px 40px -15px ${({ theme }) => theme.boxShadow};
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 600px) {
    padding: 1rem 1.5rem;
    margin: 0 15px;
    height: calc(100vh - 220px);

    max-width: 80%;
  }
`;
export const UpperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 45rem;
  width: 100%;
  margin: 0 auto 1.5rem;

  > div {
    margin: 0;
  }
  @media (max-width: 860px) {
    margin-bottom: 20px;
    flex-direction: column;
    align-items: flex-start;
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
    font-family: 'Georgia', 'Cambria', 'Times New Roman', serif;
    font-size: 16px;
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
  width: 100%;
  align-items: center;
  padding: 0 2rem;
  max-width: 45rem;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 1000px) {
    padding: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  font-size: 40px;
  letter-spacing: -0.015em;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
  background: linear-gradient(
    transparent 95%,
    ${(props) => backgroundColor(props.color)} 5%
  );
  line-height: 48px;
  ${'' /* margin: 0 auto; */}
  padding: 0;
  justify-content: flex-start;
  border: 0;
  height: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  &:focus {
    outline: 0;
    border: 0;
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const NoteUpdatedDate = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.shadowedText};
  @media (max-width: 860px) {
    margin-bottom: 15px;
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
  font-size: 16px;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.accent};
  border-radius: 20px;
  border: 0;
  color: ${({ theme }) => theme.buttonText};
  cursor: pointer;
  transition: background-color 200ms ease;
  margin: 0 0 40px auto;
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
