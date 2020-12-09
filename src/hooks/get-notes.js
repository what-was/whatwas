import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export const getNotes = (boardId) => {
  const [notes, setNotes] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  const user = JSON.parse(localStorage.getItem('authUser'));

  useEffect(() => {
    if (boardId === '') {
      firebase
        .firestore()
        .collection('notes')
        .where('uid', '==', user.uid)
        .where('archived', '==', false)
        .orderBy('updatedAt', 'desc')
        .limit(40)
        .onSnapshot((snapshot) => {
          const allNotes = snapshot.docs.map((note) => ({
            id: note.id,
            ...note.data(),
          }));

          // To aviod infinite loop on contents, we are simply checking if the content has changed.
          if (JSON.stringify(allNotes) !== JSON.stringify(notes)) {
            setNotes(allNotes);
          }
        });
    } else {
      firebase
        .firestore()
        .collection('notes')
        .where('boardId', '==', boardId)
        .where('archived', '==', false)
        .orderBy('updatedAt', 'desc')
        .limit(40)
        .onSnapshot((snapshot) => {
          const allNotes = snapshot.docs.map((note) => ({
            id: note.id,
            ...note.data(),
          }));

          // To aviod infinite loop on contents, we are simply checking if the content has changed.
          if (JSON.stringify(allNotes) !== JSON.stringify(notes)) {
            setNotes(allNotes);
          }
        });
    }
  }, [boardId]);

  return { notes };
};

export const getTitle = (boardId) => {
  const [title, setTitle] = useState('');
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (boardId !== '') {
      firebase
        .firestore()
        .collection('boards')
        .where('boardId', '==', boardId)
        .limit(1)
        .get()
        .then((snapshot) => {
          const selectedTitle = snapshot.docs.map((content) => ({
            ...content.data(),
            docId: content.id,
          }));
          if (JSON.stringify(selectedTitle) !== JSON.stringify(title)) {
            setTitle(selectedTitle[0].name);
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    } else {
      setTitle('Dashboard');
    }
  }, [boardId]);
  return title;
};

export const getSingleNote = (noteId) => {
  const [note, setNote] = useState({});
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (noteId !== '') {
      firebase
        .firestore()
        .collection('notes')
        .where('noteId', '==', noteId)
        .get()
        .then((snapshot) => {
          const currNote = snapshot.docs.map((content) => ({
            ...content.data(),
            docId: content.id,
          }));
          if (JSON.stringify(currNote) !== JSON.stringify(note)) {
            setNote(currNote[0]);
          }
        });
    }
  }, [noteId]);

  return note;
};
