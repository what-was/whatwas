import React, { useState } from 'react';
import {
  Container,
  UpperContainer,
  Title,
  AddNoteButton,
  NotesList,
  NoteTitle,
  NoteSummary,
  NoteContainer,
  LowerContainer,
  Favorite,
  NoteUpdatedDate,
  EmptyContainer,
  EmptyWarn,
  EmptyImage,
} from './styles/board';

import { RiStarSLine, RiStarFill } from 'react-icons/ri';
import { BiPlus } from 'react-icons/bi';

export default function Board({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Board.UpperContainer = function BoardUpperContainer({
  children,
  ...restProps
}) {
  return <UpperContainer {...restProps}>{children}</UpperContainer>;
};

Board.Title = function BoardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Board.AddNoteButton = function BoardAddNoteButton({ children, ...restProps }) {
  return (
    <AddNoteButton {...restProps}>
      <BiPlus />
      <p>{children}</p>
    </AddNoteButton>
  );
};

Board.NoteContainer = function BoardNoteContainer({ children, ...restProps }) {
  return <NoteContainer {...restProps}>{children}</NoteContainer>;
};

Board.NotesList = function BoardNotesList({ children, ...restProps }) {
  return <NotesList {...restProps}>{children}</NotesList>;
};

Board.NoteUpdatedDate = function BoardNoteUpdatedDate({
  children,
  ...restProps
}) {
  return <NoteUpdatedDate {...restProps}>{children}</NoteUpdatedDate>;
};

Board.NoteTitle = function BoardNoteTitle({ children, ...restProps }) {
  return <NoteTitle {...restProps}>{children}</NoteTitle>;
};

Board.NoteSummary = function BoardNoteSummary({ children, ...restProps }) {
  return <NoteSummary {...restProps}>{children}</NoteSummary>;
};

Board.Favorite = function BoardFavorite({ children, starred, ...restProps }) {
  return (
    <Favorite {...restProps}>
      {starred ? <RiStarFill /> : <RiStarSLine />}
      {children}
    </Favorite>
  );
};

Board.LowerContainer = function BoardLowerContainer({
  children,
  ...restProps
}) {
  return <LowerContainer {...restProps}>{children}</LowerContainer>;
};

Board.EmptyContainer = function BoardEmptyContainer({
  children,
  ...restProps
}) {
  return <EmptyContainer {...restProps}>{children}</EmptyContainer>;
};

Board.EmptyWarn = function BoardEmptyWarn({ children, ...restProps }) {
  return <EmptyWarn {...restProps}>{children}</EmptyWarn>;
};

Board.EmptyImage = function BoardEmptyImage({ children, ...restProps }) {
  return <EmptyImage {...restProps}>{children}</EmptyImage>;
};
