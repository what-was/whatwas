import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { useAuthListener } from '.';

export default function getBoards(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const user = useAuthListener().user;
  const db = firebase.firestore();
  const boards = db.collection('boards');

  useEffect(() => {
    const unsubscribe = boards
      .where('uid', '==', user.uid)
      .where('archived', '==', false)
      .orderBy('updatedAt', 'desc')
      .onSnapshot((snapshot) => {
        const allContent = snapshot.docs.map((content) => ({
          ...content.data(),
          docId: content.id,
        }));
        // To aviod infinite loop on contents, we are simply checking if the content has changed.
        if (JSON.stringify(allContent) !== JSON.stringify(content)) {
          setContent(allContent);
        }
      });
    return () => unsubscribe();
  }, [target]);

  return { [target]: content };
}

export const getMostRecentBoard = () => {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const user = JSON.parse(localStorage.getItem('authUser')).uid;
  const db = firebase.firestore();
  const boards = db.collection('boards');

  useEffect(() => {
    boards
      .where('uid', '==', user)
      .where('archived', '==', false)
      .orderBy('updatedAt', 'desc')
      .limit(1)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((content) => ({
          ...content.data(),
          docId: content.id,
        }));
        // To aviod infinite loop on contents, we are simply checking if the content has changed.
        if (JSON.stringify(allContent) !== JSON.stringify(content)) {
          setContent(allContent);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return content;
};
