import React from 'react';
import { Board, Sidebar } from '../components';
import { useContent } from '../hooks';

export function SidebarContainer()
{
    const boards = useContent('boards');
    const user = JSON.parse(localStorage.getItem('authUser'));

    return (
        <Sidebar>
            <Sidebar.List>
                {boards &&
                    boards.boards.map((board) => (
                        <Sidebar.ListItem key={board.id}>
                            <Sidebar.BoardName>{board.name}</Sidebar.BoardName>
                            {/* <Board.ProfileContainer>
                                <Board.ProfilePhoto src={user.photoURL} />
                                <Board.ProfileName>{user.displayName}</Board.ProfileName>
                            </Board.ProfileContainer> */}
                        </Sidebar.ListItem>
                    ))}
            </Sidebar.List>

            <Sidebar.AddBoard>Add Board</Sidebar.AddBoard>
        </Sidebar>
    );
}
