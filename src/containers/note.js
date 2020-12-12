import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import { getSingleNote } from '../hooks';
import { HourGlass } from 'react-awesome-spinners';
import { Note } from '../components';

import { Editor } from './note/editor';

// Hooks
import { useSelectedNoteValue } from '../context';
import { getSingleNote } from '../hooks';

export const NoteContainer = () => {
  let { boardId, noteId } = useParams();

  // History
  let history = useHistory();

  // Context
  const { selectedNote } = useSelectedNoteValue();

  const [title, setTitle] = useState('');

  let notes =
    selectedNote.noteTitle !== undefined
      ? selectedNote
      : getSingleNote(boardId, noteId);

  if (notes.noteTitle !== title && notes.noteTitle !== undefined) {
    setTitle(notes.noteTitle);
    document.title = notes.noteTitle;
  }

  if (notes.note === undefined) {
    return (
      <Note>
        <Note.Loader>
          <HourGlass size={16} />
        </Note.Loader>
      </Note>
    );
  }

  if (notes.archived) {
    history.push('/dashboard');
  }

  return (
    <Note>
      <Editor note={notes} />
    </Note>
  );
};
