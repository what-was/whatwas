import React, { useState } from 'react';
import { Sidebar } from '../components';
import { useSelectedBoardValue, useBoardsValue } from '../context';

export function SidebarContainer({}) {
  // const boards = useContent('boards');
  const { boards } = useBoardsValue();
  const { setSelectedBoard } = useSelectedBoardValue();
  const [active, setActive] = useState('');
  const user = JSON.parse(localStorage.getItem('authUser'));

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

      <Sidebar.AddBoard>Add Board</Sidebar.AddBoard>
    </Sidebar>
  );
}
