import React, { useState, useContext } from 'react';
import { AddItem } from '../components';
import { RiCloseLine } from 'react-icons/ri';
import { AddColorContainer } from './board/add-color';
import { generatePushId } from '../helpers';
import { FirebaseContext } from '../context/firebase';

export const AddNoteContainer = (props) => {
  const [addNoteTitle, setAddNoteTitle] = useState('Note Title');
  const [noteInput, setNoteInput] = useState('');
  const [colorPick, setColorPick] = useState('');
  const { firebase } = useContext(FirebaseContext);

  const noteId = generatePushId();

  const user = JSON.parse(localStorage.getItem('authUser')).uid;

  const handleColorPick = (color) => {
    setColorPick(color);
  };

  const addNote = () => {
    const boardId = props.boardId;
    const db = firebase.firestore();
    const board = db.collection('boards').doc(boardId);
    const note = board.collection('notes');
    return (
      addNoteTitle &&
      noteInput &&
      note
        .doc(noteId)
        .set({
          boardId: boardId,
          noteTitle: addNoteTitle,
          noteId: noteId,
          noteSummary: noteInput.substring(0, 200),
          note: noteInput,
          noteColor: colorPick,
          uid: user,
          updatedAt: Date.now(),
        })
        .then(() => {
          board
            .update({
              updatedAt: Date.now(),
            })
            .then(() => {
              setAddNoteTitle('');
              setNoteInput('');
              setColorPick('');
              props.action(true);
            })
            .catch((error) => console.error(error));
        })
        .catch((error) => {
          console.error(error);
          props.action(false);
        })
    );
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
        autoFocus={true}
      />
      <AddColorContainer
        hasOpen={true}
        onChange={(color) => handleColorPick(color)}
      />

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

      <AddItem.Submit onClick={() => addNote()}>Add</AddItem.Submit>
    </AddItem>
  );
};
