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
  flex-wrap: wrap;
  margin: 0 28px 28px;
  padding: 2rem 3.5rem;
  background-color: #fffffe;
  border-radius: 20px;
  height: calc(100vh - 162px);
  -webkit-box-shadow: 0px 15px 40px -15px rgba(220, 187, 160, 0.5);
  -moz-box-shadow: 0px 15px 40px -15px rgba(220, 187, 160, 0.5);
  box-shadow: 0px 15px 40px -15px rgba(220, 187, 160, 0.5);
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem auto;
  flex-wrap: wrap;
  max-width: 45rem;
  width: 100%;
`;

export const Title = styled.h2`
  display: flex;
  font-size: 1.75rem;
  font-weight: 700;
  color: #232323;
  background-image: linear-gradient(
    transparent 90%,
    ${(props) => backgroundColor(props.color)} 10%
  );
  background-position-y: 3.7rem;
  line-height: 1.2;
  margin: 0;
  padding: 20px 0;
`;

export const NoteUpdatedDate = styled.p``;

export const Text = styled.p`
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
`;
