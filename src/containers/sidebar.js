import React, { useState, useRef, useEffect } from 'react';
import { Sidebar, Collection } from '../components';
import { useBoardsValue, useCollectionsValue } from '../context';
import { AddBoardContainer } from './add-board';
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai';
import { BoardItemContainer } from './sidebar/board-item';

export function SidebarContainer({}) {
  const { boards } = useBoardsValue();
  const { collection } = useCollectionsValue();
  const [addBoardOpen, setAddBoardOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState([]);
  const [active, setActive] = useState('');
  const [listItemModal, setListItemModal] = useState(false);

  let container = useRef(null);

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setAddBoardOpen(false);
    }
  };

  const boardItemAction = (id) => {
    setActive(id);
    // setSelectedBoard(id);
  };

  const handleAction = () => {
    setAddBoardOpen(!addBoardOpen);
  };

  const handleCollectionOpen = (collectionId) => {
    collectionOpen.includes(collectionId)
      ? setCollectionOpen(
          collectionOpen.filter((collection) => collection !== collectionId)
        )
      : setCollectionOpen((collectionOpen) =>
          collectionOpen.concat(collectionId)
        );
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
    <Sidebar>
      <Sidebar.List>
        {collection && (
          <Collection.List>
            {collection.map((collection) => (
              <Collection key={collection.collectionId}>
                <Collection.ButtonContainer
                  onClick={() => handleCollectionOpen(collection.collectionId)}
                >
                  <Collection.Title>
                    {collection.collectionName
                      ? collection.collectionName
                      : 'untitled collection'}
                  </Collection.Title>
                  {collectionOpen.includes(collection.collectionId) ? (
                    <AiFillCaretDown />
                  ) : (
                    <AiFillCaretRight />
                  )}
                </Collection.ButtonContainer>
                {collectionOpen.includes(collection.collectionId) && (
                  <Collection.BoardList>
                    {boards &&
                      boards
                        .filter(
                          (board) =>
                            board.collectionId === collection.collectionId
                        )
                        .map((board) => (
                          <BoardItemContainer
                            key={board.boardId}
                            board={board}
                            clickAction={() => boardItemAction(board.boardId)}
                            activeBoard={active}
                          />
                        ))}
                  </Collection.BoardList>
                )}
              </Collection>
            ))}
          </Collection.List>
        )}
        {boards &&
          boards
            .filter((board) => board.collectionId === '')
            .map((board) => (
              <BoardItemContainer
                key={board.boardId}
                board={board}
                clickAction={() => boardItemAction(board.boardId)}
                activeBoard={active}
              />
            ))}
      </Sidebar.List>

      <Sidebar.AddBoard onClick={() => handleAction()}>
        Add Board
      </Sidebar.AddBoard>
      {addBoardOpen && (
        <aside ref={container}>
          <AddBoardContainer
            id="addBoardContainer"
            action={() => handleAction()}
          />
        </aside>
      )}
    </Sidebar>
  );
}
