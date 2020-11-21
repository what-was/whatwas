import styled from 'styled-components/macro';

const backgroundColor = (color) => {
  switch (color) {
    case 'yellow':
      return '#fcf4bc';
    case 'blue':
      return '#caf0f8';
    case 'pink':
      return '#ffc2d4';
    case 'orange':
      return '#ffd6a5';
    case 'green':
      return '#b7e4c7';
    case 'grey':
      return '#e9ecef';
    default:
      return '#fcf4bc';
  }
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 28px 28px;
  padding: 2rem 3.5rem;
  background-color: #fffffe;
  border-radius: 20px;
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
  background-color: ${(props) => backgroundColor(props.color)};
  line-height: 1.2;
  margin: 0;
  padding: 20px;
`;

export const NoteUpdatedDate = styled.p``;

export const Text = styled.p`
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
`;

export const TagsContainer = styled.div`
  display: flex;
  margin: auto auto 0 0;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  width: auto;
  height: auto;
  background-color: rgba(0, 0, 0, 0.1);
  color: #232323;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 13px;
  margin: 10px 10px 0 0;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
