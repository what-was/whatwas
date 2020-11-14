import React from 'react';
import { DashboardContainer } from '../containers/dashboard';
import { HeaderContainer } from '../containers/header';
import { SidebarContainer } from '../containers/sidebar';
import { FooterContainer } from '../containers/footer';
import { InnerPage } from '../components';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('authUser'));

  return (
    <>
      <HeaderContainer title="Dashboard" />
      <InnerPage>
        <SidebarContainer />
        <DashboardContainer />
      </InnerPage>
      {/* <FooterContainer /> */}
    </>
  );
}
