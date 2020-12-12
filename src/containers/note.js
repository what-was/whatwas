import React, { useState, useEffect } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
// import { getSingleNote } from '../hooks';
import { HourGlass } from 'react-awesome-spinners';
import { Note } from '../components';

import { Editor } from './note/editor';

// Hooks
import { useSelectedNoteValue } from '../context';
import { getSingleNote } from '../hooks';

export const NoteContainer = (props) => {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    if (notes.note !== undefined) setLoading(false);
    const timer = setTimeout(() => {
      loading && setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [notes]);

  if (loading) {
    return (
      <Note>
        <Note.Loader>
          <HourGlass size={16} />
        </Note.Loader>
      </Note>
    );
  }

  if (notes.note === undefined && !loading) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <Note>
        <Editor note={notes} />
      </Note>
    );
  }
};
