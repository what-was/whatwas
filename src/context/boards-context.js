import React, { createContext, useContext } from 'react';
import { useContent, getCollections } from '../hooks';

export const BoardsContext = createContext();
export const BoardsProvider = ({ children }) => {
  const { boards, setBoards } = useContent('boards');

  return (
    <BoardsContext.Provider value={{ boards, setBoards }}>
      {children}
    </BoardsContext.Provider>
  );
};

export const useBoardsValue = () => useContext(BoardsContext);
