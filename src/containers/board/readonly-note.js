import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

export const ReadOnlyNote = (props) => {
  const [value, setValue] = useState(props.note);

  return <ReactQuill theme="bubble" value={value} readOnly={true} />;
};
