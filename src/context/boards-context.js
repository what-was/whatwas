import React, { createContext, useContext } from 'react';
import { getBoards } from '../hooks';

export const BoardsContext = createContext();
export const BoardsProvider = ({ children }) => {
  const { boards, setBoards } = getBoards('boards');

  return (
    <BoardsContext.Provider value={{ boards, setBoards }}>
      {children}
    </BoardsContext.Provider>
  );
};

export const useBoardsValue = () => useContext(BoardsContext);
