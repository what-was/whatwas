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
  width: 100%;
  flex-wrap: wrap;
`;

export const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0.5rem;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  color: #232323;
  margin: 0;
  cursor: default;
`;

export const AddNoteButton = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 2rem;
  font-size: 16px;
  font-weight: 500;
  color: #232323;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  background-color: rgba(227, 222, 218, 0.6);
  cursor: pointer;
  transition: 100ms all ease;
  svg {
    height: 16px;
    font-weight: 600;
    width: auto;
    margin-right: 0.25rem;
  }

  &:hover {
    background-color: rgba(227, 222, 218, 0.8);
  }
`;

export const NoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
`;

export const NotesList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0.5rem;
  border-radius: 10px;
  flex: 0 1 240px;
  padding: 1rem 1.25rem;
  cursor: pointer;
  background-color: #fffffe;
  border: 1px solid #ede7e1;
  text-decoration: none;
  transition: box-shadow 350ms ease;
  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #222525;
    display: flex;
    flex-direction: column;
  }

  &:hover {
    box-shadow: 0 10px 45px -20px rgba(100, 100, 100, 0.3);
  }
`;

export const NoteTitle = styled.h4`
  display: flex;
  margin: 0 0 0.25rem 0;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
  color: #232323;
  cursor: pointer;
  padding: 0 0 0.5rem 0;
  width: auto;
  align-items: flex-start;
  word-wrap: normal;
  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => backgroundColor(props.color)};
    margin: 5px 10px auto 0;
    display: table;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LowerContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
`;

export const NoteSummary = styled.p`
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  width: auto;
  height: auto;
  background-color: rgba(200, 200, 200, 0.2);
  color: #232323;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 13px;
  margin: 10px 10px 0 0;

  &:hover {
    background-color: rgba(200, 200, 200, 0.4);
  }
`;

export const Favorite = styled.div`
  position: relative;
  padding: 5px;
  height: auto;
  align-items: flex-end;
  display: flex;
  cursor: pointer;

  svg {
    height: 1.5rem;
    width: auto;
  }
`;
