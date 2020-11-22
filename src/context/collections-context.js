import React, { createContext, useContext } from 'react';
import { getCollections } from '../hooks';

export const CollectionsContext = createContext();
export const CollectionsProvider = ({ children }) => {
  const { collection, setCollection } = getCollections();

  return (
    <CollectionsContext.Provider value={{ collection, setCollection }}>
      {children}
    </CollectionsContext.Provider>
  );
};

export const useCollectionsValue = () => useContext(CollectionsContext);
