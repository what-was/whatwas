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
import { ContextContainer } from '../containers/context-container';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('authUser'));

  return (
    <>
      <HeaderContainer />
      <InnerPage>
        <SidebarContainer />
        <NoteContainer />
      </InnerPage>
    </>
  );
}
