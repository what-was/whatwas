import React, { useState } from 'react';
import { firebase } from '../firebase';
import { generatePushId } from '../helpers';
import { useBoardsValue } from '../context';

export const AddBoard = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [boardName, setBoardName] = useState('');

  const boardId = generatePushId();
  const { setBoards } = useBoardsValue();

  const addBoard = () => {
    boardName &&
      firebase
        .firestore()
        .collection('boards')
        .add({
          boardId,
          name: boardName,
          userId: 'ZroloardSwozGoognMXbXX',
          hasDeleted: false,
          visibility: '',
        })
        .then(() => {
          setBoards([]);
          setBoardName('');
          setShow(false);
        });
  };
  return (
    <div className="add-board" data-testid="add-board">
      {show && (
        <div className="add-board__input">
          <input
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            className="add-board__name"
            type="text"
            placeholder="Name your board"
          />
          <button
            className="add-board__submit"
            type="button"
            onClick={() => addBoard()}
            data-testid="add-board-submit"
          >
            Add Board
          </button>
          <span
            data-testid="hide-board-overlay"
            className="add-board__cancel"
            onClick={() => setShow(false)}
          >
            Cancel
          </span>
        </div>
      )}
      {!show && (
        <div
          className="add-board__action-button"
          id="add-board-action-button"
          data-testid="add-board-action"
          onClick={() => setShow(!show)}
        >
          <span className="add-board__plus">+</span>
          <span className="add-board__text">Add Board</span>
        </div>
      )}
    </div>
  );
};
