import React, { useState, useRef, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../components';
import { FirebaseContext } from '../../context/firebase';
import { generatePushId } from '../../helpers';

export const AddCollectionContainer = (props) => {
  const [collectionTitle, setCollectionTitle] = useState('');

  // Firebase context
  const { firebase } = useContext(FirebaseContext);

  // Ref for modal container
  let addCollectionRef = useRef(null);

  // Click outside function
  const handleClickOutside = (event) => {
    if (
      addCollectionRef.current &&
      !addCollectionRef.current.contains(event.target)
    ) {
      props.action();
    }
  };

  // Handle modal click outside
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  // Getting user id
  const user = JSON.parse(localStorage.getItem('authUser')).uid;

  // Generate board id
  const collectionId = generatePushId();

  // Add board to collection
  let history = useHistory();
  const handleAddCollection = async () => {
    const collectionTitleCurr =
      collectionTitle !== '' ? collectionTitle : 'untitled collection';

    await firebase
      .firestore()
      .collection('collection')
      .doc(collectionId)
      .set({
        collectionId: collectionId,
        collectionName: collectionTitleCurr,
        uid: user,
        archived: false,
        updatedAt: Date.now(),
      })
      .then(() => {
        setCollectionTitle('');
        props.action();
      })
      .catch((error) => console.error(error));
  };

  return (
    <aside ref={addCollectionRef}>
      <Modal>
        <Modal.Inner modalType="add-item" addCollection={true}>
          <Modal.Input
            placeholder="Collection Title"
            value={collectionTitle}
            onChange={(e) => setCollectionTitle(e.target.value)}
          />
          <Modal.ButtonsContainer>
            <Modal.ConfirmButton
              type="button"
              onClick={() => {
                handleAddCollection();
              }}
            >
              Confirm
            </Modal.ConfirmButton>
            <Modal.Cancel onClick={props.action}>Cancel</Modal.Cancel>
          </Modal.ButtonsContainer>
        </Modal.Inner>
      </Modal>
    </aside>
  );
};
