import React from 'react';
import {
  Container,
  Title,
  NotesList,
  ProfileContainer,
  ProfilePhoto,
  ProfileName,
  UpdatedText,
} from './styles/board';

export default function Board({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Board.Title = function BoardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Board.NotesList = function BoardNotesList({ children, ...restProps }) {
  return <NotesList {...restProps}>{children}</NotesList>;
};

Board.ProfileContainer = function BoardProfileContainer({
  children,
  ...restProps
}) {
  return <ProfileContainer>{children}</ProfileContainer>;
};

Board.ProfilePhoto = function BoardProfilePhoto({ src, ...restProps }) {
  return <ProfilePhoto {...restProps} src={`/images/avatars/${src}.png`} />;
};

Board.ProfileName = function BoardProfileName({ children, ...restProps }) {
  return <ProfileName {...restProps}>{children}</ProfileName>;
};
