import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(null);

  const { firebase } = useContext(FirebaseContext);

  const listener = firebase.auth().onAuthStateChanged((authUser) => {
    if (authUser) {
      localStorage.setItem('authUser', JSON.stringify(authUser));
      // firebase.analytics().setUser(authUser.uid);
      setUser(authUser);
    } else {
      localStorage.removeItem('authUser');
      setUser(null);
    }
  });

  return { user };
}
