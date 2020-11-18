import React, { useState } from 'react';
import { AddNote } from '../components';
import { BiPlus } from 'react-icons/bi';

export const AddNoteContainer = (clicked) =>
{
    const [addNoteClicked, setAddNoteClicked] = useState(false);

    const [titleInput, setTitleInput] = useState('');
    const [noteInput, setNoteInput] = useState('');

    const handleAddNote = () =>
    {
        setAddNoteClicked(!addNoteClicked);
    };


    return (
        <>
            <AddNote open={addNoteClicked}>
                <AddNote.Close open={addNoteClicked} onClick={() => handleAddNote()} />
                <AddNote.CTAButton open={addNoteClicked} onClick={() => handleAddNote()}>
                    <BiPlus />
                    <AddNote.CTAText>
                        Add Note
                    </AddNote.CTAText>
                </AddNote.CTAButton>
                <AddNote.Title placeholder="Untitled" value={titleInput} onChange={(e) => { setTitleInput(e.target.value) }} open={addNoteClicked} />
                <AddNote.Input rows='3' data-min-rows='3' placeholder='Type your note' value={noteInput} onChange={(e) => { setNoteInput(e.target.value) }} autoFocus open={addNoteClicked} />

            </AddNote>
        </>
    );
};
