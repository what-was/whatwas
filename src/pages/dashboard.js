import React from 'react';
import { DashboardContainer } from '../containers/dashboard';
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

      <DashboardContainer />
      {/* </BoardsProvider>
          </SelectedBoardProvider>
        </CollectionsProvider>
      </InnerPage> */}
    </>
  );
}
