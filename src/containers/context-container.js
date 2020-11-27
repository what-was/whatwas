import React from 'react';
import
{
    BoardsProvider,
    SelectedBoardProvider,
    CollectionsProvider,
    SidebarProvider,
} from '../context/';

export const ContextContainer = ({ children }) =>
{
    return (
        <SidebarProvider>
            <CollectionsProvider>
                <SelectedBoardProvider>
                    <BoardsProvider>
                        {children}
                    </BoardsProvider>
                </SelectedBoardProvider>
            </CollectionsProvider>
        </SidebarProvider>
    )
};