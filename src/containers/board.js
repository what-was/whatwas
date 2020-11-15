import React, { useState, useEffect } from 'react';
import { useSelectedBoardValue } from '../context';
import { Board } from '../components';
import { getNotes, getTitle } from '../hooks';


export const BoardContainer = () =>
{
    const [title, setTitle] = useState('Dashboard');
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
                {notes && notes.map((note) => (
                    <Board.NotesList key={note.noteId} color={note.noteColor}>
                        <Board.NoteSummary>{note.note}</Board.NoteSummary>
                        {/* <Board.NoteUpdatedDate>{note.updatedAt.toDate().toString()}</Board.NoteUpdatedDate> */}

                    </Board.NotesList>

                ))}
            </Board.NoteContainer>

        </Board>

    );
}