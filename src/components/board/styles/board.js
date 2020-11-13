import styled from 'styled-components/macro';

export const Container = styled.div`
  min-width: 240px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1.25rem 1.5rem;
  background-color: #fffffe;
  margin: 1.25rem;
  border-radius: 10px;
  color: #222525;
  -webkit-box-shadow: 0px 10px 30px -25px rgba(220, 187, 160, 0.8);
  -moz-box-shadow: 0px 10px 30px -25px rgba(220, 187, 160, 0.8);
  box-shadow: 0px 10px 30px -25px rgba(220, 187, 160, 0.8);

  @media (max-width: 1020px) {
    margin: 0.5rem;
  }

  @media (max-width: 950px) {
    margin: 0.5rem;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #232323;
  word-wrap: break-word;
  margin-bottom: 2rem;
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
