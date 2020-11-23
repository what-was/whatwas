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
`;

export const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 1rem;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  display: flex;
  font-size: 2rem;
  font-weight: 700;
  color: #232323;
  margin: 0;
`;

export const AddNoteButton = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: #232323;
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  background-color: rgba(227, 222, 218, 0.6);
  cursor: pointer;
  transition: 100ms all ease;
  svg {
    height: 1rem;
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
  margin: 1rem 1rem;
  border-radius: 10px;
  width: 250px;
  min-height: 200px;
  padding: 1.5rem 2.25rem;
  cursor: pointer;
  background-color: ${(props) => backgroundColor(props.color)}};
  text-decoration: none;
  
  a{
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #222525;
    display: flex;
    flex-direction: column;
  }
  
  &:hover h4 {
      text-decoration: underline;
  }
`;

export const NoteTitle = styled.h4`
  margin: 0 0 0.25rem 0;
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 700;
  color: #232323;
  word-wrap: break-word;
  cursor: pointer;
  padding: 0.5rem 0;
  width: auto;

  &:hover {
    text-decoration: underline;
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
  background-color: rgba(255, 255, 255, 0.7);
  color: #232323;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 13px;
  margin: 10px 10px 0 0;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
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
