import React, { useState } from 'react';
import * as ROUTES from '../constants/routes';
import { Board, Dashboard } from '../components';

export function DashboardContainer() {
  const [title, setTitle] = useState('Dashboard');
  const user = JSON.parse(localStorage.getItem('authUser'));

  document.title = `${title} - WhatWas`;

  return (
    <Dashboard>
      <Dashboard.Title>{title}</Dashboard.Title>
      <Dashboard.Inner>
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
