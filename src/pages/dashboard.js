import React from 'react';
import { DashboardContainer } from '../containers/dashboard';
import { HeaderContainer } from '../containers/header';
import { SidebarContainer } from '../containers/sidebar';
import { InnerPage } from '../components';

import { ContextContainer } from '../containers/context-container';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('authUser'));

  return (
    <>
      <HeaderContainer />
      <InnerPage>
        <SidebarContainer />
        <DashboardContainer />
      </InnerPage>
    </>
  );
}
