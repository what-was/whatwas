import React, { useState, useRef, useEffect, useContext } from 'react';
import { Sidebar, Modal } from '../../components';
import { Link } from 'react-router-dom';
import { MoreButtonContainer } from './more-button';
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
        <Link
          key={board.boardId}
          to={'/dashboard/' + board.boardId}
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
          {/* <AiOutlineFolder /> */}
          <Sidebar.BoardName>
            {board.name ? board.name : 'untitled'}
          </Sidebar.BoardName>
        </Link>
        <MoreButtonContainer board={board} />
      </Sidebar.ListItem>
    </>
  );
});
