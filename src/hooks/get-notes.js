import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export const getNotes = (boardId) => {
  const [notes, setNotes] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  const db = firebase.firestore();
  const board = db.collection('boards');
  const note = boardId
    ? board
        .doc(boardId)
        .collection('notes')
        .orderBy('updatedAt', 'desc')
        .limit(40)
    : null;

  useEffect(() => {
    if (boardId !== undefined && note !== null) {
      const unsubscribe = note.onSnapshot((querySnapshot) => {
        const allNotes = querySnapshot.docs.map((note) => ({
          id: note.id,
          ...note.data(),
        }));

        // To aviod infinite loop on contents, we are simply checking if the content has changed.
        if (JSON.stringify(allNotes) !== JSON.stringify(notes)) {
          setNotes(allNotes);
        }
      });
      return () => unsubscribe();
    }
  }, [boardId]);

  return { notes };
};

export const getSingleNote = (boardId, noteId) => {
  const [note, setNote] = useState({});
  const { firebase } = useContext(FirebaseContext);

  const db = firebase.firestore();
  const board = db.collection('boards');

  useEffect(() => {
    board
      .doc(boardId)
      .collection('notes')
      .doc(noteId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const singleNote = doc.data();
          if (JSON.stringify(singleNote) !== JSON.stringify(note)) {
            setNote(singleNote);
          }
        }
      })
      .catch((err) => console.error(err));
  }, [boardId, noteId]);

  return note;
};
