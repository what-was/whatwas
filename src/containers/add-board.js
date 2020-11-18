import React, { useState, useEffect } from 'react';
import { AddBoard } from '../components';
import { RiCloseLine } from 'react-icons/ri';
import { BiPlus } from 'react-icons/bi';

export const AddBoardContainer = (props) =>
{
  const [addBoardTitle, setAddBoardTitle] = useState('Board Title');

  const [addNoteClicked, setAddNoteClicked] = useState(false);

  const [titleInput, setTitleInput] = useState('');
  const [noteInput, setNoteInput] = useState('');

  const handleAddNote = () =>
  {
    setAddNoteClicked(!addNoteClicked);
  };


  return (
    <AddBoard>
      <AddBoard.Close onClick={props.action}>
        <RiCloseLine />
      </AddBoard.Close>
      <AddBoard.Title
        placeholder={addBoardTitle}
        onChange={(event) => setAddBoardTitle(event.target.value)}
        type="text"
      />
      <AddBoard.Description
        type="texarea"
        rows={3}
        placeholder="Type description to your board, or continue with adding notes."
      />
      <AddBoard.NoteContainer hasOpen={addNoteClicked}>

        <AddBoard.CTAButton
          hasOpen={addNoteClicked}
          onClick={() => handleAddNote()}
        >
          <BiPlus />
          <AddBoard.CTAText>Add Note</AddBoard.CTAText>
        </AddBoard.CTAButton>

        <AddBoard.NoteClose hasOpen={addNoteClicked} onClick={() => handleAddNote()}><RiCloseLine /></AddBoard.NoteClose>
        <AddBoard.NoteTitle
          placeholder="Note Title"
          value={titleInput}
          onChange={(e) =>
          {
            setTitleInput(e.target.value);
          }}
          hasOpen={addNoteClicked}
        />
        <AddBoard.Input
          rows="3"
          data-min-rows="3"
          placeholder="Type your note"
          value={noteInput}
          onChange={(e) =>
          {
            setNoteInput(e.target.value);
          }}
          autoFocus
          hasOpen={addNoteClicked}
        />
      </AddBoard.NoteContainer>
      <AddBoard.Submit>Save</AddBoard.Submit>
    </AddBoard>
  );
};
