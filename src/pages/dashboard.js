import React from 'react';
import { DashboardContainer } from '../containers/dashboard';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('authUser'));

  return (
    <>
      <HeaderContainer title="Dashboard" />

      <DashboardContainer />
      <FooterContainer />
    </>
  );
}
