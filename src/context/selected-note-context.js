import React, { createContext, useContext, useState } from 'react';

export const SelectedNoteContext = createContext();
export const SelectedNoteProvider = ({ children }) => {
  const [selectedNote, setSelectedNote] = useState({});

  return (
    <SelectedNoteContext.Provider value={{ selectedNote, setSelectedNote }}>
      {children}
    </SelectedNoteContext.Provider>
  );
};

export const useSelectedNoteValue = () => useContext(SelectedNoteContext);
