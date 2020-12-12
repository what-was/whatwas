import React from 'react';
import {
  BoardsProvider,
  SelectedBoardProvider,
  CollectionsProvider,
  SidebarProvider,
  SelectedNoteProvider,
} from '../context/';

export const ContextContainer = ({ children }) => {
  return (
    <SidebarProvider>
      <CollectionsProvider>
        <SelectedBoardProvider>
          <SelectedNoteProvider>
            <BoardsProvider>{children}</BoardsProvider>
          </SelectedNoteProvider>
        </SelectedBoardProvider>
      </CollectionsProvider>
    </SidebarProvider>
  );
};
