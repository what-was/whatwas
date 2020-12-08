import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { useAuthListener } from '.';

export default function getCollections() {
  const [collections, setCollections] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const user = useAuthListener().user;

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('collection')
      .where('uid', '==', user.uid)
      .where('archived', '==', false)
      .orderBy('updatedAt', 'desc')
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
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  return { ['collection']: collections };
}
