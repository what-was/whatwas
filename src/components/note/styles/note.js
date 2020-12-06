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
  overflow: auto;

  .ql-editor {
    padding: 2rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  margin-right: auto;
  align-items: center;
`;

export const Title = styled.input`
  display: flex;
  font-size: 1.75rem;
  font-weight: 700;
  color: #232323;
  background-image: linear-gradient(
    transparent 95%,
    ${(props) => backgroundColor(props.color)} 5%
  );
  background-position-y: 3.5rem;
  line-height: 1.2;
  margin: 0;
  padding: 20px 0;
  justify-content: center;
  border: 0;
  width: 90%;

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
`;
