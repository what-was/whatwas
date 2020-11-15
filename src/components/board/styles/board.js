import styled from 'styled-components/macro';

const backgroundColor = (color) => {
  switch (color) {
    case 'yellow':
      return '#fff05a';
      break;
    case 'blue':
      return '#85beff';
      break;
    case 'pink':
      return 'pink';
      break;
    case 'orange':
      return '#ffdc5c';
      break;
    default:
      'yellow';
      break;
  }
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  display: flex;
  margin: 2rem 3rem 1.25rem;
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
