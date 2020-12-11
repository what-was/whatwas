import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

// Component
import { Board } from '../../components';
import { NoteMoreButtonContainer } from '../note/delete';
import { ReadOnlyNote } from './readonly-note';

// Helpers
import { formatDate } from '../../helpers';

export const NoteListItem = (props) => {
  const note = props.note;
  const sidebar = props.sidebar;

  return (
    <Board.NotesList key={note.id} sidebarOpen={sidebar} color={note.noteColor}>
      <Link to={`/note/` + note.noteId}>
        <Board.NoteTitle color={note.noteColor}>
          {note.noteTitle}
        </Board.NoteTitle>

        <Board.NoteSummary>
          <ReadOnlyNote note={note.noteSummary ? note.noteSummary : ''} />
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
  );
};
