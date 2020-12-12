import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function getCollections(target) {
  const [collections, setCollections] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const user = JSON.parse(localStorage.getItem('authUser')).uid;
  const db = firebase.firestore();
  const collection = db.collection('collections');

  useEffect(() => {
    const unsubscribe = collection
      .where('uid', '==', user)
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
  }, [target]);
  return { ['collection']: collections };
}
