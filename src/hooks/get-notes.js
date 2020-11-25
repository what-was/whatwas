import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function getNotes(boardId) {
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
        .orderBy('hierarchy', 'desc')
        .limit(10)
        .get()
        .then((snapshot) => {
          const allNotes = snapshot.docs.map((content) => ({
            ...content.data(),
            docId: content.id,
          }));
          if (JSON.stringify(allNotes) !== JSON.stringify(notes)) {
            setNotes(allNotes);
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    } else {
      firebase
        .firestore()
        .collection('notes')
        .where('boardId', '==', boardId)
        .where('archived', '==', false)
        .orderBy('hierarchy', 'desc')
        .limit(10)
        .get()
        .then((snapshot) => {
          const allNotes = snapshot.docs.map((content) => ({
            ...content.data(),
            docId: content.id,
          }));
          if (JSON.stringify(allNotes) !== JSON.stringify(notes)) {
            setNotes(allNotes);
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [boardId]);

  return { notes };
}

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
          setNote(currNote[0]);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [noteId]);

  return note;
};
