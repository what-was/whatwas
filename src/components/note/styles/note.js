import styled from 'styled-components/macro';

const backgroundColor = (color) => {
  switch (color) {
    case 'yellow':
      return '#fff475';
    case 'blue':
      return '#cbf0f8';
    case 'pink':
      return '#ffc2d4';
    case 'orange':
      return '#fbbc04';
    case 'green':
      return '#ccff90';
    case 'grey':
      return '#e8eaed';
    default:
      return 'transparent';
  }
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 28px 28px;
  padding: 2rem 3rem;
  background-color: #fffffe;
  border-radius: 20px;
  height: calc(100vh - 162px);
  box-shadow: 0px 15px 40px -15px rgba(220, 187, 160, 0.5);
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;
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
    line-height: 1.5;
    letter-spacing: -0.003em;
    clear: both;
    a {
      display: inline-block;
      color: #f94144;
      cursor: pointer;

      &:visited {
        color: #f94144;
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
`;

export const Title = styled.div`
  display: flex;
  font-size: 40px;
  letter-spacing: -0.015em;
  font-weight: 700;
  color: #232323;
  background: linear-gradient(
    transparent 95%,
    ${(props) => backgroundColor(props.color)} 5%
  );
  line-height: 48px;
  margin: 0 auto;
  padding: 0 2rem;
  justify-content: flex-start;
  border: 0;
  width: 100%;
  height: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  &:focus {
    outline: 0;
    border: 0;
  }
`;

export const NoteUpdatedDate = styled.p``;

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
  background-color: #a81d1d;
  border-radius: 20px;
  border: 0;
  color: #fffffe;
  cursor: pointer;
  transition: background-color 200ms ease;
  margin: 0 0 0 auto;
  &:hover {
    background-color: #f94144;
  }
  &:focus {
    outline: 0;
  }
`;
