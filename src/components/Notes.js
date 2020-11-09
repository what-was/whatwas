import React, { useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { useNotes } from '../hooks';
import { collatedNotes } from '../constants';
import { getTitle, getCollatedTitle, collatedNotesExist } from '../helpers';
import { useSelectedBoardValue, useBoardsValue } from '../context';

export const Notes = () =>
{
    const { selectedBoard } = useSelectedBoardValue();
    const { boards } = useBoardsValue();
    const { notes } = useNotes(selectedBoard);

    let boardName = '';

    if (boards && selectedBoard && !collatedNotesExist(selectedBoard)) {
        boardName = getTitle(boards, selectedBoard).name;
    }

    if (collatedNotesExist(selectedBoard) && selectedBoard) {
        boardName = getCollatedTitle(collatedNotes, selectedBoard).name;
    }

    useEffect(() =>
    {
        document.title = `${boardName}: WhatWas`
    });

    return (
        <div className="notes" data-testid="notes">
            <h2 data-testid="board-name">{boardName}</h2>

            <ul className="notes__list">
                {notes.map((note) => (
                    <li key={`${note.id}`}
                        className={note.noteColor ? note.noteColor : 'yellow'}
                    >
                        <Checkbox id={note.id} />
                        <span>{note.note}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
