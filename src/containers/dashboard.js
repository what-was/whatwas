import React, { useState } from 'react';
import * as ROUTES from '../constants/routes';
import { Dashboard } from '../components';
import { BoardContainer } from './board';

export function DashboardContainer() {
  const user = JSON.parse(localStorage.getItem('authUser'));

  document.title = 'Dashboard - WhatWas';
  return (
    <Dashboard>
      <Dashboard.Inner>
        <BoardContainer />
      </Dashboard.Inner>
    </Dashboard>
  );
}
