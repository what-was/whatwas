import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Note } from '../components';
import { getSingleNote } from '../hooks';

export const NoteContainer = () => {
  let { noteId } = useParams();

  const [title, setTitle] = useState('');
  let notes = getSingleNote(noteId);

  if (notes.noteTitle !== title && notes.noteTitle !== undefined) {
    setTitle(notes.noteTitle);
    document.title = notes.noteTitle;
  }

  return (
    <Note>
      <Note.InnerContainer>
        <Note.Title color={notes.noteColor}>{notes.noteTitle}</Note.Title>
        <Note.Text>{notes.note}</Note.Text>
        <Note.TagsContainer>
          {notes.tags &&
            notes.tags.map((tag) => <Note.Tag key={tag}>{tag}</Note.Tag>)}
        </Note.TagsContainer>
      </Note.InnerContainer>
    </Note>
  );
};
