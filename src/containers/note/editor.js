import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import { Note } from '../../components';
import 'react-quill/dist/quill.bubble.css';

export const Editor = (props) => {
  let notes = props.note;
  const [value, setValue] = useState(notes.note);
  const [title, setTitle] = useState(notes.noteTitle);

  const editorRef = useRef(null);

  useEffect(() => {
    editorRef.current.focus();
  }, []);

  const handleSave = () => {};

  return (
    notes && (
      <>
        <Note.InnerContainer>
          <Note.TitleContainer>
            <Note.Title
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              color={notes.noteColor}
            />
          </Note.TitleContainer>
          <ReactQuill
            placeholder={'Input'}
            theme="bubble"
            getContent={setValue}
            value={value}
            onChange={setValue}
            ref={editorRef}
            preserveWhitespace={true}
          />

          <Note.SaveButton>Save</Note.SaveButton>
        </Note.InnerContainer>
      </>
    )
  );
};
