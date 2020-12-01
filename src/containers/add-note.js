import React, { useState, useEffect } from 'react';
import { AddItem } from '../components';
import { RiCloseLine } from 'react-icons/ri';
import { AddColorContainer } from './board/add-color';

export const AddNoteContainer = (props) => {
  const [addNoteTitle, setAddNoteTitle] = useState('Note Title');
  const [noteInput, setNoteInput] = useState('');
  const [colorPick, setColorPick] = useState('');

  const handleColorPick = (color) => {
    setColorPick(color);
  };

  return (
    <AddItem>
      <AddItem.Close onClick={props.action}>
        <RiCloseLine />
      </AddItem.Close>
      <AddItem.NoteTitle
        placeholder="Note Title"
        hasOpen={true}
        addNote={true}
        onChange={(event) => setAddNoteTitle(event.target.value)}
        type="text"
      />
      <AddColorContainer onChange={(color) => handleColorPick(color)} />

      <AddItem.Input
        rows="3"
        data-min-rows="3"
        placeholder="Type your note"
        value={noteInput}
        hasOpen={true}
        addNote={true}
        onChange={(e) => {
          setNoteInput(e.target.value);
        }}
      />

      <AddItem.Submit>Add</AddItem.Submit>
    </AddItem>
  );
};
