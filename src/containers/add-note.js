import React, { useState, useContext, useRef } from 'react';
import { AddItem } from '../components';
import { Note } from '../components';
import { RiCloseLine } from 'react-icons/ri';
import { AddColorContainer } from './board/add-color';
import { generatePushId } from '../helpers';
import { FirebaseContext } from '../context/firebase';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

export const AddNoteContainer = (props) => {
  const [addNoteTitle, setAddNoteTitle] = useState('Note Title');
  const [noteInput, setNoteInput] = useState('');
  const [colorPick, setColorPick] = useState('');
  const { firebase } = useContext(FirebaseContext);

  const noteId = generatePushId();

  const user = JSON.parse(localStorage.getItem('authUser')).uid;
  const editorRef = useRef(null);

  const handleColorPick = (color) => {
    setColorPick(color);
  };

  const addNote = () => {
    const date = Date.now();
    const boardId = props.boardId;
    const db = firebase.firestore();
    const board = db.collection('boards').doc(boardId);
    const note = board.collection('notes');

    const noteValue = JSON.stringify(
      editorRef.current.getEditor().getContents()
    );
    const summary = JSON.stringify(
      editorRef.current.getEditor().getContents(0, 200)
    );
    return (
      addNoteTitle &&
      noteInput &&
      note
        .doc(noteId)
        .set({
          boardId: boardId,
          noteTitle: addNoteTitle,
          noteId: noteId,
          noteSummary: summary,
          note: noteValue,
          noteColor: colorPick,
          uid: user,
          updatedAt: date,
        })
        .then(() => {
          board
            .update({
              updatedAt: date,
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

      <ReactQuill
        placeholder="Type your note"
        theme="bubble"
        defaultValue={noteInput}
        onChange={setNoteInput}
        ref={editorRef}
        preserveWhitespace={true}
        id="editor"
      />

      <AddItem.Submit onClick={() => addNote()}>Add</AddItem.Submit>
    </AddItem>
  );
};
