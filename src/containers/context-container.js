import React from 'react';
import { HeaderContainer } from '../containers/header';
import { SidebarContainer } from '../containers/sidebar';
import { InnerPage } from '../components';
import {
  BoardsProvider,
  SelectedBoardProvider,
  CollectionsProvider,
  SidebarProvider,
} from '../context/';

export const ContextContainer = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('authUser'));

  return (
    <>
      <SidebarProvider>
        <HeaderContainer />
        <InnerPage>
          <CollectionsProvider>
            <SelectedBoardProvider>
              <BoardsProvider>
                <SidebarContainer />
                {children}
              </BoardsProvider>
            </SelectedBoardProvider>
          </CollectionsProvider>
        </InnerPage>
      </SidebarProvider>
    </>
  );
};
