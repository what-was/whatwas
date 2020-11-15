import React from 'react';
import
{
  Container,
  Title,
  NotesList,
  NoteSummary,
  NoteContainer,
  NoteUpdatedDate,
} from './styles/board';

export default function Board({ children, ...restProps })
{
  return <Container {...restProps}>{children}</Container>;
}

Board.Title = function BoardTitle({ children, ...restProps })
{
  return <Title {...restProps}>{children}</Title>;
};

Board.NoteContainer = function BoardNoteContainer({ children, ...restProps })
{
  return <NoteContainer {...restProps}>{children}</NoteContainer>;
};
Board.NotesList = function BoardNotesList({ children, ...restProps })
{
  return <NotesList {...restProps}>{children}</NotesList>;
};


Board.NoteUpdatedDate = function BoardNoteUpdatedDate({ children, ...restProps })
{
  return <NoteUpdatedDate {...restProps}>{children}</NoteUpdatedDate>;
};

Board.NoteSummary = function BoardNoteSummary({ children, ...restProps })
{
  return <NoteSummary {...restProps}>{children}</NoteSummary>;
};
