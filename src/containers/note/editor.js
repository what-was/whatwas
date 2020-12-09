import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react';
import ReactQuill from 'react-quill';
import { Note } from '../../components';
import { AddColorContainer } from '../board/add-color';
import { formatDate } from '../../helpers';
import { FirebaseContext } from '../../context/firebase';
import 'react-quill/dist/quill.bubble.css';

export const Editor = (props) => {
  let notes = props.note;
  const [currentNote, setCurrentNote] = useState(notes.note);
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
    if (
      currentNote !== value ||
      currentTitle !== title ||
      currentColor !== color
    ) {
      setButtonText('Save');
    } else {
      setButtonText('Saved');
    }
  }, [value]);

  const handleSave = () => {
    if (
      currentNote !== value ||
      currentTitle !== title ||
      currentColor !== color
    ) {
      return firebase
        .firestore()
        .collection('notes')
        .doc(notes.docId)
        .update({
          noteTitle: title,
          note: value,
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
          <AddColorContainer
            hasOpen={true}
            noteColor={notes.noteColor}
            onChange={(color) => setColor(color)}
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
            getContent={setValue}
            value={value}
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
