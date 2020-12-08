import React from 'react';
import {
  Container,
  UpperContainer,
  InnerContainer,
  TitleContainer,
  Title,
  Text,
  NoteUpdatedDate,
  SaveButton,
} from './styles/note';

export default function Note({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Note.UpperContainer = function NoteUpperContainer({ children, ...restProps }) {
  return <UpperContainer {...restProps}>{children}</UpperContainer>;
};

Note.InnerContainer = function NoteInnerContainer({ children, ...restProps }) {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
};

Note.Title = function NoteTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Note.Text = function NoteText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Note.NoteUpdatedDate = function NoteNoteUpdatedDate({
  children,
  ...restProps
}) {
  return <NoteUpdatedDate {...restProps}>{children}</NoteUpdatedDate>;
};

Note.SaveButton = function NoteSaveButton({ children, ...restProps }) {
  return <SaveButton {...restProps}>{children}</SaveButton>;
};

Note.TitleContainer = function NoteSaveButton({ children, ...restProps }) {
  return <TitleContainer {...restProps}>{children}</TitleContainer>;
};
