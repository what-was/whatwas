import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

export const ReadOnlyNote = (props) => {
  const note = JSON.parse(props.note);
  const [value, setValue] = useState(note);

  return <ReactQuill theme="bubble" defaultValue={value} readOnly={true} />;
};
