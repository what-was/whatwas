import React, { useState, useEffect } from 'react';
import { AddItem } from '../components';
import { RiCloseLine } from 'react-icons/ri';
import { BiPlus } from 'react-icons/bi';

export const AddBoardContainer = (props) => {
  const [addBoardTitle, setAddBoardTitle] = useState('Board Title');

  const [addNoteClicked, setAddNoteClicked] = useState(false);

  const [titleInput, setTitleInput] = useState('');
  const [noteInput, setNoteInput] = useState('');

  const handleAddNote = () => {
    setAddNoteClicked(!addNoteClicked);
  };

  return (
    <AddItem>
      <AddItem.Close onClick={props.action}>
        <RiCloseLine />
      </AddItem.Close>
      <AddItem.Title
        placeholder={addBoardTitle}
        onChange={(event) => setAddBoardTitle(event.target.value)}
        type="text"
      />
      <AddItem.Description
        type="texarea"
        rows={3}
        placeholder="Type description to your board, or continue with adding notes."
      />
      <AddItem.NoteContainer hasOpen={addNoteClicked}>
        <AddItem.CTAButton
          hasOpen={addNoteClicked}
          onClick={() => handleAddNote()}
        >
          <BiPlus />
          <AddItem.CTAText>Add Note</AddItem.CTAText>
        </AddItem.CTAButton>

        <AddItem.NoteClose
          hasOpen={addNoteClicked}
          onClick={() => handleAddNote()}
        >
          <RiCloseLine />
        </AddItem.NoteClose>
        <AddItem.NoteTitle
          placeholder="Note Title"
          value={titleInput}
          onChange={(e) => {
            setTitleInput(e.target.value);
          }}
          hasOpen={addNoteClicked}
        />
        <AddItem.Input
          rows="3"
          data-min-rows="3"
          placeholder="Type your note"
          value={noteInput}
          onChange={(e) => {
            setNoteInput(e.target.value);
          }}
          autoFocus
          hasOpen={addNoteClicked}
        />
      </AddItem.NoteContainer>
      <AddItem.Submit>Save</AddItem.Submit>
    </AddItem>
  );
};
