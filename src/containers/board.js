import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
// Components
import { Board } from '../components';
import { AddNoteContainer } from './add-note';
import { ColorFilterContainer } from './board/color-filter';
import { NoteMoreButtonContainer } from './note/delete';
import { Note } from '../components';
import { ReadOnlyNote } from './board/readonly-note';
import { HourGlass } from 'react-awesome-spinners';

// Hooks
import { useSidebarValue } from '../context';
import { getNotes, getTitle } from '../hooks';

// Helpers
import { formatDate } from '../helpers';

export const BoardContainer = () => {
  const [title, setTitle] = useState('Dashboard');
  const [addNoteOpen, setAddNoteOpen] = useState(false);
  // const { selectedBoard } = useSelectedBoardValue();

  const { sidebar, setSidebar } = useSidebarValue();

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

  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [loading]);

  // Todo: favorite note
  // const handleFavorite = () => {
  //   setStarred(!starred);
  // };

  // let options = { year: 'numeric', month: 'long', day: 'numeric', timezone: 'short' };

  if (notes.length > 0) {
    return (
      <Board>
        <Board.UpperContainer>
          <Board.Title>{title}</Board.Title>
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
                .filter((note) => note.noteColor === colorFilter)
                .map((note) => (
                  <Board.NotesList key={note.id} color={note.noteColor}>
                    <Link to={`/note/` + note.noteId}>
                      <Board.NoteTitle color={note.noteColor}>
                        {note.noteTitle}
                      </Board.NoteTitle>

                      <Board.NoteSummary>
                        {note.note.length > 200 ? (
                          <ReadOnlyNote note={note.note.substring(0, 200)} />
                        ) : (
                          <ReadOnlyNote note={note.note} />
                        )}
                      </Board.NoteSummary>
                      {/* <Board.Favorite
                  starred={starred}
                  onClick={() => handleFavorite()}
                /> */}
                    </Link>
                    <Board.LowerContainer>
                      <Board.NoteUpdatedDate>
                        Last update: {formatDate(note.updatedAt)}
                      </Board.NoteUpdatedDate>
                      <NoteMoreButtonContainer />
                    </Board.LowerContainer>
                  </Board.NotesList>
                ))
            : notes.map((note) => (
                <Board.NotesList
                  key={note.id}
                  sidebarOpen={sidebar}
                  color={note.noteColor}
                >
                  <Link to={`/note/` + note.noteId}>
                    <Board.NoteTitle color={note.noteColor}>
                      {note.noteTitle}
                    </Board.NoteTitle>

                    <Board.NoteSummary>
                      {note.note.length > 200 ? (
                        <ReadOnlyNote note={note.note.substring(0, 200)} />
                      ) : (
                        <ReadOnlyNote note={note.note} />
                      )}
                    </Board.NoteSummary>
                    {/* <Board.Favorite
                  starred={starred}
                  onClick={() => handleFavorite()}
                /> */}
                  </Link>
                  <Board.LowerContainer>
                    <Board.NoteUpdatedDate>
                      Last update: {formatDate(note.updatedAt)}
                    </Board.NoteUpdatedDate>
                    <NoteMoreButtonContainer note={note} />
                  </Board.LowerContainer>
                </Board.NotesList>
              ))}
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
  }

  return (
    <Board>
      <Board.UpperContainer>
        <Board.Title>{title}</Board.Title>
        {boardId !== undefined && (
          <Board.AddNoteButton onClick={handleAddNote}>
            Add Note
          </Board.AddNoteButton>
        )}
      </Board.UpperContainer>
      <Board.NoteContainer>
        {loading && (
          <Note.Loader>
            <HourGlass size={16} />
          </Note.Loader>
        )}
        {loading === false && (
          <Board.EmptyContainer>
            <Board.EmptyWarn>Please add note</Board.EmptyWarn>
            <Board.EmptyImage
              src="/images/misc/empty-icon.png"
              alt="Empty board"
              loading="lazy"
              height="350"
            />
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
