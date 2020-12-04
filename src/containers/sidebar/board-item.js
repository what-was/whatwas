import React, { useState, useRef, useEffect, useContext } from 'react';
import { Sidebar, Modal } from '../../components';
import { useSelectedBoardValue } from '../../context';
import { FirebaseContext } from '../../context/firebase';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineFolder } from 'react-icons/ai';

export const BoardItemContainer = React.memo((props) => {
  const board = props.board;
  const active = props.activeBoard;

  const { setSelectedBoard } = useSelectedBoardValue();

  const [listItemModal, setListItemModal] = useState(false);

  const { firebase } = useContext(FirebaseContext);

  let container = useRef(null);

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setAddBoardOpen(false);
    }
  };

  const handleMoreButton = (e) => {
    setListItemModal(!listItemModal);
  };

  const handleBoardNameChange = (newName) => {
    

  }
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

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <Sidebar.ListItem
        key={board.boardId}
        data-doc-id={board.docId}
        data-testid="board-action"
        role="button"
        tabIndex={0}
        aria-label={`Select ${board.name} as the board`}
        status={active === board.boardId ? 'active' : ''}
      >
        <AiOutlineFolder />
        <Sidebar.BoardName
          onClick={() => {
            props.clickAction();
            setSelectedBoard(board.boardId);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              props.clickAction();
              setSelectedBoard(board.boardId);
            }
          }}
        >
          {board.name ? board.name : 'untitled'}
        </Sidebar.BoardName>
        <Sidebar.MoreButton id="more-btn">
          <BiDotsVerticalRounded onClick={() => handleMoreButton()} />
        </Sidebar.MoreButton>
      </Sidebar.ListItem>
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
});
