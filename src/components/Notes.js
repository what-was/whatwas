import React from 'react'
import { Checkbox } from './Checkbox';
import { useNotes } from '../hooks';

export const Notes = () => {
    const { notes } = useNotes('1');

    let boardName = '';

    
    return (
        <div className="notes" data-testid="notes">
            <h2 data-testid="board-name">{boardName}</h2>

            <ul className="notes__list">
                {notes.map(note => (
                    <li key={`${note.id}`}>
                        <Checkbox id={note.id} />
                        <span>{note.note}</span>
                    </li>
                ))}

            </ul>
        </div>
    )
}