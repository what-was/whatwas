import React from 'react';
import {
  Container,
  InnerContainer,
  Title,
  Text,
  NoteUpdatedDate,
} from './styles/note';

export default function Note({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

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
