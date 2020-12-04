import React, { useState, useRef, useEffect, useContext } from 'react';
import { Sidebar, Modal } from '../../components';

export const MoreButtonContainer = (props) => {
  const [listItemModal, setListItemModal] = useState(false);
  const board = props.board;

  // Ref for modal container
  let container = useRef(null);

  // Modal open
  const handleMoreButton = () => {
    setListItemModal(!listItemModal);
  };

  // Handle modal click outside
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

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
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Sidebar.MoreButton id="more-btn">
        <BiDotsVerticalRounded onClick={() => handleMoreButton()} />
      </Sidebar.MoreButton>
      {listItemModal && (
        <Modal>
          <Modal.Inner>
            <Modal.WarningText>Are you sure?</Modal.WarningText>
            <Modal.ConfirmButton
              type="button"
              onClick={() => handleBoardDelete(board.docId)}
            >
              Confirm
            </Modal.ConfirmButton>
            <Modal.Cancel onClick={() => setListItemModal(!listItemModal)}>
              Cancel
            </Modal.Cancel>
          </Modal.Inner>
        </Modal>
      )}
    </>
  );
};
