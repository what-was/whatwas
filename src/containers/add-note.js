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
            
        </>
    );
};
