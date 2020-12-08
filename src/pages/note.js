import React from 'react';
import { NoteContainer } from '../containers/note';
import { HeaderContainer } from '../containers/header';
import { SidebarContainer } from '../containers/sidebar';
import { InnerPage } from '../components';

export default function Dashboard() {
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
