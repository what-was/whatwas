import styled from 'styled-components/macro';

const backgroundColor = (color) => {
  switch (color) {
    case 'yellow':
      return '#fee651';
      break;
    case 'blue':
      return '#a2d6f9';
      break;
    case 'pink':
      return '#ffc2d4';
      break;
    case 'orange':
      return '#ffbf81';
      break;
    case 'green':
      return '#9cd39c';
      break;
    case 'grey':
      return '#e9ecef';
      break;
    case 'brown':
      return '#beb1ab';
      break;
    default:
      'yellow';
      break;
  }
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  display: flex;
  margin: 1rem 2rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  color: #232323;
`;

export const NoteTitle = styled.h4`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #232323;
  word-wrap: break-word;
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 0.5rem 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const NoteContainer = styled.div`
  display: flex;
`;

export const NotesList = styled.div`
  background-color: ${(props) => backgroundColor(props.color)}};
  margin: 1rem 0.75rem;
  padding: 1rem 1.25rem;
  max-width: 250px;
  border-radius: 10px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NoteUpdatedDate = styled.p``;

export const NoteSummary = styled.p`
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
