import React, { useState, useEffect } from 'react';
import { AddNoteContainer } from './add-note';
import { AddBoard } from '../components';
import { RiCloseLine } from 'react-icons/ri';

export const AddBoardContainer = (props) => {
  const [addBoardTitle, setAddBoardTitle] = useState('Board Title');

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
      <AddNoteContainer />
      <AddBoard.Submit>Save</AddBoard.Submit>
    </AddBoard>
  );
};
