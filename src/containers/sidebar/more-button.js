import React, { useState, useRef, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Sidebar, Modal } from '../../components';
import { FirebaseContext } from '../../context/firebase';

import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

export const MoreButtonContainer = (props) => {
  const [listItemModal, setListItemModal] = useState(false);
  const [warnModal, setWarnModal] = useState(false);
  const board = props.board;

  let { boardId } = useParams();

  // Firebase context
  const { firebase } = useContext(FirebaseContext);

  // Ref for modal container
  let container = useRef(null);

  // Modal open
  const handleMoreButton = () => {
    setListItemModal(!listItemModal);
  };

  // Click outside function
  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setListItemModal(false);
      setWarnModal(false);
    }
  };

  // Handle modal click outside
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  let history = useHistory();
  const handleBoardNameChange = (newName) => {};
  const handleBoardDelete = (board) => {
    firebase
      .firestore()
      .collection('boards')
      .doc(board)
      .update({
        hasDeleted: true,
      })
      .then(() => {
        setListItemModal(!listItemModal);
        history.push('/dashboard');
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Sidebar.MoreButton hover={listItemModal ? true : false} id="more-btn">
        <BiDotsVerticalRounded onClick={() => handleMoreButton()} />
      </Sidebar.MoreButton>
      {listItemModal && (
        <Modal>
          <aside ref={container}>
            <Modal.Inner>
              <Modal.InnerButton onClick={() => setWarnModal(!warnModal)}>
                <AiOutlineDelete />
                Delete
              </Modal.InnerButton>
              {warnModal && (
                <Modal.Inner>
                  <Modal.WarningText>Are you sure?</Modal.WarningText>
                  <Modal.ConfirmButton
                    type="button"
                    onClick={() => handleBoardDelete(board.docId)}
                  >
                    Confirm
                  </Modal.ConfirmButton>
                  <Modal.Cancel
                    onClick={() => setListItemModal(!listItemModal)}
                  >
                    Cancel
                  </Modal.Cancel>
                </Modal.Inner>
              )}
            </Modal.Inner>
          </aside>
        </Modal>
      )}
    </>
  );
};
