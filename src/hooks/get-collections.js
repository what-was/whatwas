import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { useAuthListener } from '.';

export default function getCollections() {
  const [collections, setCollections] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const user = JSON.parse(localStorage.getItem('authUser')).uid;
  const db = firebase.firestore();
  const collection = db.collection('collections');

  useEffect(() => {
    collection
      .where('uid', '==', user)
      .where('archived', '==', false)
      .orderBy('updatedAt', 'desc')
      .limit(15)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((content) => ({
          ...content.data(),
          docId: content.id,
        }));

        if (JSON.stringify(allContent) !== JSON.stringify(collections)) {
          setCollections(allContent);
        }
      })
      .catch((error) => console.error(error));
  }, []);
  return { ['collection']: collections };
}
