import React from 'react';
import { NoteContainer } from '../containers/note';
import { HeaderContainer } from '../containers/header';
import { SidebarContainer } from '../containers/sidebar';
import { InnerPage } from '../components';
import {
  BoardsProvider,
  SelectedBoardProvider,
  CollectionsProvider,
  SidebarProvider,
} from '../context/';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('authUser'));

  return (
    <>
      {/* <HeaderContainer />
      <InnerPage>
        <CollectionsProvider>
          <SelectedBoardProvider>
            <BoardsProvider>
              <SidebarContainer /> */}

      <NoteContainer />
      {/* </BoardsProvider>
          </SelectedBoardProvider>
        </CollectionsProvider>
      </InnerPage> */}
      {/* <FooterContainer /> */}
    </>
  );
}
