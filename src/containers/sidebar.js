import React, { useState, useRef, useEffect } from 'react';
import { Sidebar, Collection } from '../components';
import {
  useSelectedBoardValue,
  useBoardsValue,
  useCollectionsValue,
} from '../context';
import { AddBoardContainer } from './add-board';
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai';

export function SidebarContainer({}) {
  const { boards } = useBoardsValue();
  const { collection } = useCollectionsValue();
  const { setSelectedBoard } = useSelectedBoardValue();
  const [active, setActive] = useState('');
  const [addBoardOpen, setAddBoardOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);

  let container = useRef(null);

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setAddBoardOpen(false);
    }
  };

  const handleAction = () => {
    setAddBoardOpen(!addBoardOpen);
  };

  const handleCollectionOpen = () => {
    setCollectionOpen(!collectionOpen);
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
        {collection &&
          collection.map((collection) => (
            <Collection>
              <Collection.ButtonContainer
                onClick={() => handleCollectionOpen()}
              >
                <Collection.Title>{collection.collectionName}</Collection.Title>
                {collectionOpen ? <AiFillCaretDown /> : <AiFillCaretRight />}
              </Collection.ButtonContainer>
              {collectionOpen && (
                <Collection.BoardList>
                  {boards &&
                    boards
                      .filter((board) => board.collectionId !== '')
                      .map((board) => (
                        <Sidebar.ListItem
                          key={board.boardId}
                          data-doc-id={board.docId}
                          data-testid="board-action"
                          role="button"
                          tabIndex={0}
                          aria-label={`Select ${board.name} as the board`}
                          status={active === board.boardId ? 'active' : ''}
                          onClick={() => {
                            setActive(board.boardId);
                            setSelectedBoard(board.boardId);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              setActive(board.boardId);
                              setSelectedBoard(board.boardId);
                            }
                          }}
                        >
                          {console.log(board, 'sidebar console')}
                          <Sidebar.BoardName>{board.name}</Sidebar.BoardName>
                        </Sidebar.ListItem>
                      ))}
                </Collection.BoardList>
              )}
            </Collection>
          ))}
        {boards &&
          boards
            .filter((board) => board.collectionId === '')
            .map((board) => (
              <Sidebar.ListItem
                key={board.boardId}
                data-doc-id={board.docId}
                data-testid="board-action"
                role="button"
                tabIndex={0}
                aria-label={`Select ${board.name} as the board`}
                status={active === board.boardId ? 'active' : ''}
                onClick={() => {
                  setActive(board.boardId);
                  setSelectedBoard(board.boardId);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setActive(board.boardId);
                    setSelectedBoard(board.boardId);
                  }
                }}
              >
                <Sidebar.BoardName>{board.name}</Sidebar.BoardName>
              </Sidebar.ListItem>
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
