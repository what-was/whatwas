import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelectedBoardValue } from '../context';
import { Board } from '../components';
import { getNotes, getTitle } from '../hooks';
import { AddNoteContainer } from './add-note';
import { BiPlus } from 'react-icons/bi';
import { ColorFilterContainer } from './board/color-filter';

export const BoardContainer = React.memo(() => {
  const [title, setTitle] = useState('Dashboard');
  const [addNoteOpen, setAddNoteOpen] = useState(false);
  // const { selectedBoard } = useSelectedBoardValue();

  let { boardId } = useParams();

  const getBoardId = boardId === undefined ? '' : boardId;

  const { notes } = getNotes(getBoardId);
  const boardTitle = getTitle(getBoardId);
  const [starred, setStarred] = useState(false);
  const [colorFilter, setColorFilter] = useState('');

  // Add note modal ref
  let container = useRef(null);

  // Open/close add note modal
  const handleAddNote = (update) => {
    setAddNoteOpen(!addNoteOpen);
  };

  // Close add note modal on mouse click outside
  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setAddNoteOpen(false);
    }
  };

  // Event listener for outside click
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  // Handling color filter
  const handleFilter = (color) => {
    if (color !== '' && color !== 'default') {
      setColorFilter(color);
    } else if (color === 'default') {
      setColorFilter('');
    }
  };

  // Setting window title
  if (boardId !== '' && boardTitle !== title) {
    setTitle(boardTitle);
    document.title = `${boardTitle} - WhatWas`;
  }

  // Todo: favorite note
  // const handleFavorite = () => {
  //   setStarred(!starred);
  // };

  // let options = { year: 'numeric', month: 'long', day: 'numeric', timezone: 'short' };

  return (
    <Board>
      <Board.UpperContainer>
        <Board.Title>{title}</Board.Title>
        <Board.AddNoteButton onClick={handleAddNote}>
          <BiPlus />
          Add Note
        </Board.AddNoteButton>
        <ColorFilterContainer onClick={(color) => handleFilter(color)} />
      </Board.UpperContainer>
      <Board.NoteContainer>
        {notes && colorFilter.length > 1
          ? notes
              .filter((note) => note.noteColor === colorFilter)
              .map((note) => (
                <Board.NotesList key={note.docId} color={note.noteColor}>
                  <Link to={`/note/` + note.noteId}>
                    <Board.NoteTitle color={note.noteColor}>
                      {note.noteTitle}
                    </Board.NoteTitle>

                    <Board.LowerContainer>
                      <Board.NoteSummary>
                        {note.note.length > 140
                          ? note.note.substring(0, 140) + '...'
                          : note.note}
                      </Board.NoteSummary>
                      {/* <Board.Favorite
                  starred={starred}
                  onClick={() => handleFavorite()}
                /> */}
                    </Board.LowerContainer>
                  </Link>
                </Board.NotesList>
              ))
          : notes.map((note) => (
              <Board.NotesList key={note.docId} color={note.noteColor}>
                <Link to={`/note/` + note.noteId}>
                  <Board.NoteTitle color={note.noteColor}>
                    {note.noteTitle}
                  </Board.NoteTitle>

                  {/* <Board.LowerContainer> */}
                  <Board.NoteSummary>
                    {note.note.length > 140
                      ? note.note.substring(0, 140) + '...'
                      : note.note}
                  </Board.NoteSummary>
                  {/* <Board.Favorite
                  starred={starred}
                  onClick={() => handleFavorite()}
                /> */}
                  {/* </Board.LowerContainer> */}
                </Link>
              </Board.NotesList>
            ))}
        <aside ref={container}>
          {addNoteOpen && (
            <AddNoteContainer
              boardId={selectedBoard}
              action={(update) => handleAddNote(update)}
            />
          )}
        </aside>
      </Board.NoteContainer>
    </Board>
  );
});
