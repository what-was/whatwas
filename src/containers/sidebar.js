import React, { useState, useRef, useEffect } from 'react';
import { Sidebar, Collection } from '../components';
import {
  useBoardsValue,
  useCollectionsValue,
  useSidebarValue,
} from '../context';
import { AddBoardContainer } from './add-board';
import { BoardItemContainer } from './sidebar/board-item';
import { AddCollectionContainer } from './sidebar/add-collection';
import { AddCollectionBoardContainer } from './sidebar/add-collection-board';
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai';

export const SidebarContainer = ({}) => {
  // Contexts
  const { boards } = useBoardsValue();
  const { collection } = useCollectionsValue();
  const { sidebar, setSidebar } = useSidebarValue();

  // Add Board Modal
  const [addBoardOpen, setAddBoardOpen] = useState(false);

  // Add collection
  const [addCollection, setAddCollection] = useState(false);

  // Add board to collection
  const [addCollectionBoard, setAddCollectionBoard] = useState(false);
  const [addCollectionBoardId, setAddCollectionBoardId] = useState('');

  // Collection -> Boards list open
  const [collectionOpen, setCollectionOpen] = useState([]);

  // Set Active
  const [active, setActive] = useState('');

  let container = useRef(null);

  const clientWidth = window.innerWidth;

  useEffect(() => {}, []);

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setAddBoardOpen(false);
    }
  };

  // Sidebar default close on mobile devices
  // Activate selected board
  const boardItemAction = (id) => {
    setActive(id);
    if (clientWidth < 600) {
      setSidebar(false);
    }
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

  const handleAddCollectionBoard = (collectionId) => {
    setAddCollectionBoard(!addCollectionBoard);
    addCollectionBoardId === ''
      ? setAddCollectionBoardId(collectionId)
      : setAddCollectionBoardId('');
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    sidebar && (
      <Sidebar openStatus={sidebar}>
        <Sidebar.List>
          {collection && (
            <Collection.List>
              <Collection.AddCollectionContainer>
                <Collection.AddCollection
                  onClick={() => setAddCollection(!addCollection)}
                >
                  Add Collection
                </Collection.AddCollection>
                {addCollection && (
                  <AddCollectionContainer
                    action={() => {
                      setAddCollection(!addCollection);
                    }}
                  />
                )}
              </Collection.AddCollectionContainer>

              {collection.map((collection) => (
                <Collection key={collection.collectionId}>
                  <Collection.ButtonContainer>
                    <Collection.ButtonInnerContainer
                      onClick={() =>
                        handleCollectionOpen(collection.collectionId)
                      }
                    >
                      {collectionOpen.includes(collection.collectionId) ? (
                        <AiFillCaretDown />
                      ) : (
                        <AiFillCaretRight />
                      )}
                      <Collection.Title>
                        {collection.collectionName
                          ? collection.collectionName
                          : 'untitled collection'}
                      </Collection.Title>
                    </Collection.ButtonInnerContainer>
                    <Collection.AddBoard
                      onClick={() => {
                        handleAddCollectionBoard(collection.collectionId);
                      }}
                    />
                    {addCollectionBoardId === collection.collectionId && (
                      <AddCollectionBoardContainer
                        collectionId={collection}
                        action={() => {
                          handleAddCollectionBoard(collection.collectionId);
                        }}
                      />
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
              action={() => {
                handleAction();
              }}
            />
          </aside>
        )}
      </Sidebar>
    )
  );
};
