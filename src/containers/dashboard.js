import React, { useState } from 'react';
import * as ROUTES from '../constants/routes';
import { useContent } from '../hooks';
import { Board, Dashboard } from '../components';


export function DashboardContainer()
{
    const [title, setTitle] = useState('Dashboard');
    const user = JSON.parse(localStorage.getItem('authUser'));
    const boards = useContent('boards');
    console.log(boards.boards[2]);
    document.title = `${title} - WhatWas`;

    console.log(user);
    return (
        <Dashboard>
            <Dashboard.Title>{title}</Dashboard.Title>
            <Dashboard.Inner>
                {boards && boards.boards.map(board => (
                    <Board>
                        <Board.Title>{board.name}</Board.Title>
                        <Board.ProfileContainer>
                            <Board.ProfilePhoto src={user.photoURL} />
                            <Board.ProfileName>{user.displayName}</Board.ProfileName>
                        </Board.ProfileContainer>
                    </Board>)

                )
                }
            </Dashboard.Inner>
        </Dashboard>
    );
}
