import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { useAuthListener } from '.';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const user = useAuthListener().user;

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(target)
      .where('uid', '==', user.uid)
      .where('hasDeleted', '==', false)
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
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return { [target]: content };
}
