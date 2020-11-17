import React, { useState } from 'react';

import { AddItem } from '../components';

export const AddBoardContainer = (collection) =>
{
    const [addBoardTitle, setAddBoardTitle] = useState('Untitled');

    return (
        <AddItem>
            <AddItem.Title
                placeholder={addBoardTitle}
                onChange={(event) => setAddBoardTitle(event.target.value)}
                type="text"
            />
            <AddItem.Description type="texarea" rows={3} placeholder="Type description to your board, or continue with adding notes." />

            <AddItem.Submit>Add Board</AddItem.Submit>
        </AddItem>
    );
}