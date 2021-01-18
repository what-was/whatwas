import React, { useState, useRef, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';

// Components
import { Board } from '../components';
import { NoteListItem } from './board/note-listitem';
import { AddNoteContainer } from './add-note';
import { ColorFilterContainer } from './board/color-filter';
import { Note } from '../components';
import { HourGlass } from 'react-awesome-spinners';

// Hooks
import { useSidebarValue, useBoardsValue } from '../context';
import { getNotes } from '../hooks';

export const BoardContainer = () => {
  // States
  const [boardTitle, setBoardTitle] = useState('Loading...');
  const [addNoteOpen, setAddNoteOpen] = useState(false);
  const [colorFilter, setColorFilter] = useState('');
  const [loading, setLoading] = useState(true);

  const { boards } = useBoardsValue();

  let { boardId } = useParams();

  // Add note modal ref
  let container = useRef(null);

  // Contexts
  const { sidebar } = useSidebarValue();

  // Hooks
  const { notes } = getNotes(boardId);
  const currentBoard =
    boards !== undefined && boards.find((board) => board.boardId === boardId);

  // Handling color filter
  const handleFilter = (color) => {
    if (color !== '' && color !== 'default') {
      setColorFilter(color);
    } else if (color === 'default') {
      setColorFilter('');
    }
  };

  // Open/close add note modal
  const handleAddNote = () => {
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

  // Setting window && board title
  useEffect(() => {
    if (currentBoard !== undefined && loading) {
      document.title = `${currentBoard.name} - WhatWas`;
      setBoardTitle(currentBoard.name);
      setLoading(false);
    }

    const timer = setTimeout(() => {
      if (currentBoard === undefined && loading) {
        document.title = `Please add board - WhatWas`;
        setBoardTitle('Please add board');
        setLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [boards, boardTitle]);

  let recentBoard =
    boards &&
    boards.reduce((acc, curr) => {
      return acc.updatedAt > curr.updatedAt ? acc : curr;
    }, '').boardId;

  if (boards.length > 0 && !boards.some((board) => board.boardId === boardId)) {
    return <Redirect to={`/dashboard/${recentBoard}`} />;
  }
  if (boardId === undefined && recentBoard !== undefined) {
    return <Redirect to={`/dashboard/${recentBoard}`} />;
  }

  if (notes.length > 0) {
    return (
      <Board>
        <Board.UpperContainer>
          <Board.Title>{boardTitle}</Board.Title>
          {boardId !== undefined && (
            <Board.AddNoteButton onClick={handleAddNote}>
              Add Note
            </Board.AddNoteButton>
          )}
          <ColorFilterContainer onClick={(color) => handleFilter(color)} />
        </Board.UpperContainer>
        <Board.NoteContainer>
          {notes && colorFilter.length > 1
            ? notes
                .filter(
                  (note) => note.noteColor === colorFilter && !note.archived
                )
                .map((note) => (
                  <NoteListItem key={note.id} note={note} sidebar={sidebar} />
                ))
            : notes
                .filter((note) => !note.archived)
                .map((note) => (
                  <NoteListItem key={note.id} note={note} sidebar={sidebar} />
                ))}
          <aside ref={container}>
            {addNoteOpen && (
              <AddNoteContainer
                boardId={boardId}
                action={() => handleAddNote()}
              />
            )}
          </aside>
        </Board.NoteContainer>
      </Board>
    );
  }

  return (
    <Board>
      <Board.UpperContainer>
        <Board.Title>{boardTitle}</Board.Title>
        {boardId !== undefined && (
          <Board.AddNoteButton onClick={handleAddNote}>
            Add Note
          </Board.AddNoteButton>
        )}
      </Board.UpperContainer>
      <Board.NoteContainer>
        {loading && (
          <Board.EmptyContainer>
            <Note.Loader>
              <HourGlass size={16} />
            </Note.Loader>
          </Board.EmptyContainer>
        )}
        {!loading && (
          <Board.EmptyContainer>
            <Board.EmptyImage
              src='/images/misc/empty-icon.png'
              alt='Empty board'
              loading='lazy'
              height='300'
            />
            <Board.EmptyWarn>Please add board or note</Board.EmptyWarn>
          </Board.EmptyContainer>
        )}
        <aside ref={container}>
          {addNoteOpen && (
            <AddNoteContainer
              boardId={boardId}
              action={(update) => handleAddNote(update)}
            />
          )}
        </aside>
      </Board.NoteContainer>
    </Board>
  );
};
