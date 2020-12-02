import React, { useState, useRef, useEffect } from 'react';
import { Sidebar, Modal } from '../../components';
import { useSelectedBoardValue } from '../../context';
import { BiTrashAlt } from 'react-icons/bi';

export function BoardItemContainer(props) {
  const board = props.board;
  const active = props.activeBoard;

  const { setSelectedBoard } = useSelectedBoardValue();

  const [listItemModal, setListItemModal] = useState(false);

  let container = useRef(null);

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setAddBoardOpen(false);
    }
  };

  const handleMoreButton = (e) => {
    setListItemModal(!listItemModal);
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
          <BiTrashAlt onClick={() => handleMoreButton()} />
        </Sidebar.MoreButton>
      </Sidebar.ListItem>
      {listItemModal && (
        <Modal>
          <Modal.Inner>
            <Modal.WarningText>Are you sure?</Modal.WarningText>
            <Modal.ConfirmButton type="button">Confirm</Modal.ConfirmButton>
            <Modal.Cancel onClick={() => setListItemModal(!listItemModal)}>
              Cancel
            </Modal.Cancel>
          </Modal.Inner>
        </Modal>
      )}
    </>
  );
}
