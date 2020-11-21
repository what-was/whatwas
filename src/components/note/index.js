import React from 'react';
import {
  Container,
  InnerContainer,
  Title,
  Text,
  NoteUpdatedDate,
  TagsContainer,
  Tag,
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

Note.TagsContainer = function NoteTagsContainer({ children, ...restProps }) {
  return <TagsContainer {...restProps}>{children}</TagsContainer>;
};

Note.Tag = function NoteTag({ children, ...restProps }) {
  return <Tag {...restProps}>{children}</Tag>;
};
