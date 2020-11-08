import React, { createContext, useContext, useState } from 'react';

export const SelectedBoardContext = createContext();
export const SelectedBoardProvider = ({ children }) =>
{
  const { selectedBoard, setSelectedBoard } = useState('Today');

  return (
    <SelectedBoardContext.Provider value={{ selectedBoard, setSelectedBoard }}>
      {children}
    </SelectedBoardContext.Provider>
  );
};

export const useSelectedBoardValue = () => useContext(SelectedBoardContext);

