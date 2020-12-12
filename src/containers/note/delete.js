import React, { useState, useRef, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Sidebar, Modal } from '../../components';
import { FirebaseContext } from '../../context/firebase';

import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

export const NoteMoreButtonContainer = (props) => {
  const [listItemModal, setListItemModal] = useState(false);
  const [warnModal, setWarnModal] = useState(false);
  const note = props.note;

  const uri = useParams();
  // History
  let history = useHistory();

  // Firebase context
  const { firebase } = useContext(FirebaseContext);

  // Ref for modal container
  let container = useRef(null);

  // Modal open
  const handleMoreButton = () => {
    setListItemModal(!listItemModal);
  };

  // Click outside function
  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setListItemModal(false);
      setWarnModal(false);
    }
  };

  // Handle modal click outside
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  // Name Change Function
  const handleBoardNameChange = (newName) => {};

  // Delete board
  //   let history = useHistory();

  const handleNoteDelete = () => {
    const db = firebase.firestore();
    const board = db.collection('boards').doc(note.boardId);
    const noteDb = board.collection('notes');
    noteDb
      .doc(note.noteId)
      .delete()
      .then(() => {
        board
          .update({
            updatedAt: Date.now(),
          })
          .then(() => {
            if (uri.noteId) {
              history.push('/dashboard');
            }
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Sidebar.MoreButton
        hover={listItemModal ? true : false}
        id="noteMoreButton"
      >
        <BiDotsHorizontalRounded
          onClick={() => setListItemModal(!listItemModal)}
        />
      </Sidebar.MoreButton>
      {listItemModal && (
        <Modal>
          <aside ref={container}>
            <Modal.Inner>
              <Modal.InnerButton onClick={() => setWarnModal(!warnModal)}>
                <AiOutlineDelete />
                Delete
              </Modal.InnerButton>
              {warnModal && (
                <Modal.Inner>
                  <Modal.WarningText>Are you sure?</Modal.WarningText>
                  <Modal.ButtonsContainer>
                    <Modal.ConfirmButton
                      type="button"
                      onClick={() => {
                        handleNoteDelete(
                          note.id !== undefined ? note.id : note.docId
                        );
                      }}
                    >
                      Confirm
                    </Modal.ConfirmButton>
                    <Modal.Cancel
                      onClick={() => {
                        setListItemModal(!listItemModal);
                        setWarnModal(false);
                      }}
                    >
                      Cancel
                    </Modal.Cancel>
                  </Modal.ButtonsContainer>
                </Modal.Inner>
              )}
            </Modal.Inner>
          </aside>
        </Modal>
      )}
    </>
  );
};
