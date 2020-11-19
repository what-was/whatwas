import React, { useState, useEffect } from 'react';
import { useSelectedBoardValue } from '../context';
import { Board } from '../components';
import { getNotes, getTitle } from '../hooks';
import { AddNoteContainer } from './add-note';

export const BoardContainer = () => {
  const [title, setTitle] = useState('Dashboard');
  const [addNoteOpen, setAddNoteOpen] = useState(false);
  const { selectedBoard } = useSelectedBoardValue();
  const { notes } = getNotes(selectedBoard);
  const boardTitle = getTitle(selectedBoard);

  if (selectedBoard !== '' && boardTitle !== title) {
    setTitle(boardTitle);
    document.title = `${boardTitle} - WhatWas`;
  }

  // let options = { year: 'numeric', month: 'long', day: 'numeric', timezone: 'short' };

  return (
    <Board>
      <Board.NoteContainer>
        <Board.Title>{title}</Board.Title>
        <Board.Title>Add Note</Board.Title>
      </Board.NoteContainer>
      <Board.NoteContainer>
        {/* <AddNoteContainer open={addNoteOpen} /> */}
        {notes &&
          notes.map((note) => (
            <Board.NotesList key={note.noteId} color={note.noteColor}>
              <Board.NoteTitle>{note.noteTitle}</Board.NoteTitle>
              <Board.NoteSummary>{note.note}</Board.NoteSummary>
              <Board.TagsContainer>
                {note.tags.map((tag) => (
                  <Board.Tag>{tag}</Board.Tag>
                ))}
              </Board.TagsContainer>
              {/* <Board.NoteUpdatedDate>{note.updatedAt.toDate().toString()}</Board.NoteUpdatedDate> */}
            </Board.NotesList>
          ))}
      </Board.NoteContainer>
    </Board>
  );
};
