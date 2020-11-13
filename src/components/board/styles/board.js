import styled from 'styled-components/macro';

export const Container = styled.div`
width: 200px;
height: 100px;
display: flex;
justify-content: space-between;
flex-direction: column;
padding: 15px 20px;
background-color: #fffffe;
margin: 10px;
border-radius: 10px;
color: #222525;
-webkit-box-shadow: 0px 10px 30px -25px rgba(220, 187, 160, 0.8);
  -moz-box-shadow: 0px 10px 30px -25px rgba(220, 187, 160, 0.8);
  box-shadow: 0px 10px 30px -25px rgba(220, 187, 160, 0.8);
`;

export const Title = styled.h3`
margin: 10px 0 0 0;
color: #232323;
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
