import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { useAuthListener } from '.';

export default function getCollections() {
  const [collections, setCollections] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const user = useAuthListener().user;
  const db = firebase.firestore();
  const collection = db.collection('collection');

  useEffect(() => {
    const unsubscribe = collection
      .where('uid', '==', user.uid)
      .where('archived', '==', false)
      .orderBy('updatedAt', 'desc')
      .limit(15)
      .onSnapshot((snapshot) => {
        const allContent = snapshot.docs.map((content) => ({
          ...content.data(),
          docId: content.id,
        }));

        if (JSON.stringify(allContent) !== JSON.stringify(collections)) {
          setCollections(allContent);
        }
      });

    return () => unsubscribe();
  }, []);
  return { ['collection']: collections };
}
