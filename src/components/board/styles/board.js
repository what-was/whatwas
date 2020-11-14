import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  ${'' /* justify-content: space-between;
  flex-direction: column;
  padding: 1rem 1.25rem;
  background-color: #f8f5f2;
  border: 1px solid #232323;
  margin: 1.25rem;
  border-radius: 10px;
  color: #222525;
  cursor: pointer; */}
`;

export const Title = styled.h3`
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

export const NotesList = styled.span``;
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfilePhoto = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const ProfileName = styled.p`
  font-size: 15px;
  margin: 0;
  margin-left: 10px;
  text-transform: capitalize;
`;

export const UpdatedText = styled.p``;
