import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AddItem } from '../components';
import { AddColorContainer } from './board/add-color';
import { generatePushId } from '../helpers';
import { FirebaseContext } from '../context/firebase';
import { RiCloseLine } from 'react-icons/ri';
import { BiPlus } from 'react-icons/bi';

export const AddBoardContainer = (props) => {
  // Board states
  const [addBoardTitle, setAddBoardTitle] = useState('Board Title');
  const [addNoteClicked, setAddNoteClicked] = useState(false);
  const [boardDescription, setBoardDescription] = useState('');

  // Note states
  const [titleInput, setTitleInput] = useState('');
  const [noteInput, setNoteInput] = useState('');
  const [colorPick, setColorPick] = useState('');

  // Firebase context
  const { firebase } = useContext(FirebaseContext);

  // Generate board id & note id
  const boardId = generatePushId();
  const noteId = generatePushId();

  // Getting user id
  const user = JSON.parse(localStorage.getItem('authUser')).uid;

  // Getting color pick
  const handleColorPick = (color) => {
    setColorPick(color);
  };

  // Open "Add Note" section
  const handleAddNoteButton = () => {
    setAddNoteClicked(!addNoteClicked);
  };

  // History
  let history = useHistory();

  const db = firebase.firestore();
  const board = db.collection('boards');
  // Adding board to firebase
  const addBoard = () => {
    const boardTitle =
      addBoardTitle !== 'Board Title' ? addBoardTitle : 'untitled';

    board
      .doc(boardId)
      .set({
        boardId: boardId,
        name: boardTitle,
        uid: user,
        archived: false,
        visibility: '',
        collectionId: '',
        description: boardDescription,
        updatedAt: Date.now(),
      })
      .then(() => {
        if (titleInput.length > 2 && noteInput.length) {
          addNote();
        }
        setTitleInput('');
        setNoteInput('');
        setColorPick('');
        props.action();
        history.push(`/dashboard/${boardId}`);
      })
      .catch((error) => console.error(error));
  };

  // Adding note to firebase
  const addNote = () => {
    board
      .doc(boardId)
      .collection('notes')
      .doc(noteId)
      .set({
        archived: false,
        boardId: boardId,
        note: noteInput,
        noteSummary: noteInput.substring(0, 200),
        noteColor: colorPick,
        noteId: noteId,
        noteTitle: titleInput,
        uid: user,
        updatedAt: Date.now(),
      })
      .then(() => {
        setTitleInput('');
        setNoteInput('');
        setColorPick('');
      })
      .catch((error) => console.error(error));
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
        onChange={(event) => setBoardDescription(event.target.value)}
      />
      <AddItem.NoteContainer hasOpen={addNoteClicked}>
        <AddItem.CTAButton
          hasOpen={addNoteClicked}
          onClick={() => handleAddNoteButton()}
        >
          <BiPlus />
          <AddItem.CTAText>Add Note</AddItem.CTAText>
        </AddItem.CTAButton>

        <AddItem.NoteClose
          hasOpen={addNoteClicked}
          onClick={() => handleAddNoteButton()}
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
        <AddColorContainer
          hasOpen={addNoteClicked}
          onChange={(color) => handleColorPick(color)}
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
      <AddItem.Submit onClick={() => addBoard()}>Save</AddItem.Submit>
    </AddItem>
  );
};
