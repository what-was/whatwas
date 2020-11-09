import React, { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { useBoardsValue, useSelectedBoardValue } from '../context';
import { firebase } from '../firebase';

export const IndividualProject = ({ board }) =>
{
    const [showConfirm, setShowConfirm] = useState(false);
    const { boards, setBoards } = useBoardsValue();
    const { setSelectedBoard } = useSelectedBoardValue();

    const deleteProject = docId =>
    {
        firebase
            .firestore()
            .collection('boards')
            .doc(docId)
            .delete()
            .then(() =>
            {
                setBoards([...boards]);
                setSelectedBoard('Today');
            });
    };

    return (
        <>
            <span className="sidebar__dot">·</span>
            <span className="sidebar__board-name">{board.name}</span>
            <span className="sidebar__board-delete" data-testid="delete-board" onClick={() => setShowConfirm(!showConfirm)}>
                <FiTrash />
                {showConfirm && (
                    <div className="board-delete-modal">
                        <div className="board-delete-modal__inner">
                            <p>Are you sure to delete this board?</p>
                            <button type="button" onClick={() => deleteProject(board.docId)} >
                                Delete
                            </button>
                            <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
                        </div>
                    </div>
                )}
            </span>
        </>

    );
}
