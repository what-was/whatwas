import React, { useState, useEffect, useContext, useRef } from 'react';
import ReactQuill from 'react-quill';
import { Note } from '../../components';
import { NoteMoreButtonContainer } from './delete';
import { AddColorContainer } from '../board/add-color';
import { formatDate } from '../../helpers';
import { FirebaseContext } from '../../context/firebase';
import 'react-quill/dist/quill.bubble.css';

export const Editor = (props) => {
  const notes = props.note;
  const [currentNote, setCurrentNote] = useState(JSON.parse(notes.note));
  const [currentTitle, setCurrentTitle] = useState(notes.noteTitle);
  const [currentColor, setCurrentColor] = useState(notes.noteColor);
  const [value, setValue] = useState(currentNote);
  const [title, setTitle] = useState(currentTitle);
  const [color, setColor] = useState(currentColor);
  const [buttonText, setButtonText] = useState('Save');

  const { firebase } = useContext(FirebaseContext);

  const user = JSON.parse(localStorage.getItem('authUser'));

  const editorRef = useRef(null);

  useEffect(() => {
    editorRef.current.focus();
  }, []);

  useEffect(() => {
    const note = JSON.stringify(editorRef.current.getEditor().getContents());
    if (
      notes.note !== note ||
      currentTitle !== title ||
      currentColor !== color
    ) {
      setButtonText('Save');
    } else {
      setButtonText('Saved');
    }
  }, [value]);

  const handleSave = () => {
    const note = JSON.stringify(editorRef.current.getEditor().getContents());
    const summary = JSON.stringify(
      editorRef.current.getEditor().getContents(0, 200)
    );

    if (
      notes.note !== note ||
      currentTitle !== title ||
      currentColor !== color
    ) {
      return firebase
        .firestore()
        .collection('boards')
        .doc(notes.boardId)
        .collection('notes')
        .doc(notes.noteId)
        .update({
          noteTitle: title,
          note: note,
          noteSummary: summary,
          noteColor: color,
          updatedAt: Date.now(),
        })
        .then(() => {
          setButtonText('...');
          setCurrentNote(value);
          setCurrentTitle(title);
          setCurrentColor(color);
          setTimeout(() => {
            setButtonText('Saved');
          }, 1000);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    notes && (
      <>
        <Note.UpperContainer>
          <Note.NoteUpdatedDate>
            Updated at: {formatDate(notes.updatedAt)}
          </Note.NoteUpdatedDate>
          <NoteMoreButtonContainer note={notes} />
        </Note.UpperContainer>
        <Note.UpperContainer>
          <AddColorContainer
            hasOpen={true}
            noteColor={notes.noteColor}
            onChange={(color) => setColor(color)}
            id="noteColorFilter"
          />
        </Note.UpperContainer>
        <Note.TitleContainer>
          <Note.Title
            contentEditable
            suppressContentEditableWarning
            spellCheck={false}
            onChange={(e) => {
              setTitle(e.target.value);
              saveButtonTextFunction();
            }}
            color={color}
          >
            {title}
          </Note.Title>
        </Note.TitleContainer>
        <Note.InnerContainer>
          <ReactQuill
            placeholder={'Input'}
            theme="bubble"
            defaultValue={value}
            onChange={setValue}
            ref={editorRef}
            preserveWhitespace={true}
            readOnly={user.uid !== notes.uid}
          />

          <Note.SaveButton onClick={() => handleSave()}>
            {buttonText}
          </Note.SaveButton>
        </Note.InnerContainer>
      </>
    )
  );
};
