import React, { useState, useRef, useEffect } from 'react';
import { useSelectedBoardValue } from '../context';
import { Board } from '../components';
import { getNotes, getTitle } from '../hooks';
import { AddNoteContainer } from './add-note';
import { BiPlus } from 'react-icons/bi';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { NoteContainer } from './note';

export const BoardContainer = () => {
  const [title, setTitle] = useState('Dashboard');
  const [addNoteOpen, setAddNoteOpen] = useState(false);
  const { selectedBoard } = useSelectedBoardValue();
  const { notes } = getNotes(selectedBoard);
  const boardTitle = getTitle(selectedBoard);

  let container = useRef(null);

  const handleAddNote = () => {
    setAddNoteOpen(!addNoteOpen);
  };

  if (selectedBoard !== '' && boardTitle !== title) {
    setTitle(boardTitle);
    document.title = `${boardTitle} - WhatWas`;
  }

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setAddNoteOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  // let options = { year: 'numeric', month: 'long', day: 'numeric', timezone: 'short' };

  return (
    <Board>
      <Board.UpperContainer>
        <Board.Title>{title}</Board.Title>
        <Board.AddNoteButton onClick={handleAddNote}>
          <BiPlus />
          Add Note
        </Board.AddNoteButton>
      </Board.UpperContainer>
      <Board.NoteContainer>
        {notes &&
          notes.map((note) => (
            <Board.NotesList key={note.docId} color={note.noteColor}>
              <Link to={`note/` + note.noteId}>
                <Board.NoteTitle>{note.noteTitle}</Board.NoteTitle>
                <Board.NoteSummary>{note.note}</Board.NoteSummary>
                <Board.TagsContainer>
                  {note.tags.map((tag) => (
                    <Board.Tag key={tag}>{tag}</Board.Tag>
                  ))}
                </Board.TagsContainer>
                {/* <Board.NoteUpdatedDate>{note.updatedAt.toDate().toString()}</Board.NoteUpdatedDate> */}
              </Link>
            </Board.NotesList>
          ))}
        <aside ref={container}>
          {addNoteOpen && <AddNoteContainer action={() => handleAddNote()} />}
        </aside>
      </Board.NoteContainer>
    </Board>
  );
};
