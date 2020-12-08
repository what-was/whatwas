import React, { useState, useRef, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Sidebar, Modal } from '../../components';
import { FirebaseContext } from '../../context/firebase';
import { generatePushId } from '../../helpers';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

export const AddCollectionBoardContainer = (props) => {
  const [listItemModal, setListItemModal] = useState(false);
  const [addBoardTitle, setAddBoardTitle] = useState('');
  const collection = props.collectionId;

  // Firebase context
  const { firebase } = useContext(FirebaseContext);

  // Ref for modal container
  let addboardref = useRef(null);

  // Modal open
  const handleMoreButton = () => {
    setListItemModal(!listItemModal);
  };

  // Click outside function
  const handleClickOutside = (event) => {
    if (addboardref.current && !addboardref.current.contains(event.target)) {
      setListItemModal(false);
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
  const boardId = generatePushId();

  // Add board to collection
  let history = useHistory();
  const handleAddBoard = () => {
    const boardTitle = addBoardTitle !== '' ? addBoardTitle : 'untitled';

    firebase
      .firestore()
      .collection('boards')
      .add({
        boardId: boardId,
        name: boardTitle,
        uid: user,
        hasDeleted: false,
        visibility: '',
        collectionId: collection,
        updatedAt: Date.now(),
      })
      .then(() => {
        setAddBoardTitle('');
        props.action();
        history.push(`/dashboard/${boardId}`);
      });
  };

  return (
    <>
      <Modal>
        <aside ref={addboardref}>
          <Modal.Inner modalType="add-item">
            <Modal.Input
              type=""
              placeholder="Board Title"
              value={addBoardTitle}
              onChange={(e) => setAddBoardTitle(e.target.value)}
            />
            <Modal.ButtonsContainer>
              <Modal.ConfirmButton
                type="button"
                onClick={() => {
                  handleAddBoard();
                }}
              >
                Confirm
              </Modal.ConfirmButton>
              <Modal.Cancel onClick={props.action}>Cancel</Modal.Cancel>
            </Modal.ButtonsContainer>
          </Modal.Inner>
        </aside>
      </Modal>
    </>
  );
};
