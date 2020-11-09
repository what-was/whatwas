import React, { useState } from 'react';
import { useBoardsValue, useSelectedBoardValue } from '../context';
import { IndividualProject } from './IndividualBoard';

export const Boards = ({ activeValue = true }) =>
{
    const [active, setActive] = useState(activeValue);
    const { setSelectedBoard } = useSelectedBoardValue();
    const { boards } = useBoardsValue();

    return (
        boards && boards.map(board => (
            <li>
                <div
                    key={board.boardId}
                    data-doc-id={board.docId}
                    data-testid='board-action'
                    className={
                        active === board.boardId
                            ? 'active sidebar__board'
                            : 'sidebar__board'
                    }
                    onClick={() =>
                    {
                        setActive(board.boardId);
                        setSelectedBoard(board.boardId);
                    }}
                >

                    <IndividualProject board={board} />
                </div>
            </li>
        )
        )
    );

};