import React, { useState, useRef, useEffect } from 'react';
import { Sidebar } from '../components';
import { useSelectedBoardValue, useBoardsValue } from '../context';
import { AddBoardContainer } from './add-board';

export function SidebarContainer({ })
{
  // const boards = useContent('boards');
  const { boards } = useBoardsValue();
  const { setSelectedBoard } = useSelectedBoardValue();
  const [active, setActive] = useState('');
  const [addBoardOpen, setAddBoardOpen] = useState(false);

  let container = useRef(null);

  const handleClickOutside = (event) =>
  {
    if (container.current && !container.current.contains(event.target)) {
      setAddBoardOpen(false);
    }
  };

  const handleAction = () =>
  {
    setAddBoardOpen(!addBoardOpen);
  };

  useEffect(() =>
  {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
    {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <Sidebar>
      <Sidebar.List>
        {boards &&
          boards.map((board) => (
            <Sidebar.ListItem
              key={board.boardId}
              data-doc-id={board.docId}
              data-testid="board-action"
              role="button"
              tabIndex={0}
              aria-label={`Select ${board.name} as the board`}
              status={active === board.boardId ? 'active' : ''}
              onClick={() =>
              {
                setActive(board.boardId);
                setSelectedBoard(board.boardId);
              }}
              onKeyDown={(e) =>
              {
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
