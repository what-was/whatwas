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
        {/* {boards && boards.boards.map(board => (
                    <Board key={board.id}>
                        <Board.Title>{board.name}</Board.Title>
                        <Board.ProfileContainer>
                            <Board.ProfilePhoto src={user.photoURL} />
                            <Board.ProfileName>{user.displayName}</Board.ProfileName>
                        </Board.ProfileContainer>
                    </Board>)

                )
                } */}
      </Dashboard.Inner>
    </Dashboard>
  );
}
