import styled from 'styled-components/macro';

const backgroundColor = (color) => {
  switch (color) {
    case 'yellow':
      return '#ffd670';
    case 'blue':
      return '#a2d6f9';
    case 'pink':
      return '#ffc2d4';
    case 'orange':
      return '#ffbf81';
    case 'green':
      return '#9cd39c';
    case 'grey':
      return '#e9ecef';
    case 'brown':
      return '#beb1ab';
    default:
      'yellow';
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

export const NotesList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f5f2;
  margin: 1rem 0.75rem;
  padding: 1.5rem 2.5rem;
  border-radius: 10px;
  width: 20%;
  cursor: pointer;
  background-color: ${(props) => backgroundColor(props.color)}};
`;

export const NoteTitle = styled.h4`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #232323;
  word-wrap: break-word;
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  width: auto;

  &:hover {
    text-decoration: underline;
  }
`;

export const NoteContainer = styled.div`
  display: flex;
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

export const TagsContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  width: auto;
  height: auto;
  background-color: rgba(250, 250, 250, 0.6);
  color: #232323;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 13px;
  margin: 0 10px 10px 0;

  &:hover {
    background-color: rgba(250, 250, 250, 0.8);
  }
`;
