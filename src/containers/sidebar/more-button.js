import React, { useState, useRef, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Sidebar, Modal } from '../../components';
import { FirebaseContext } from '../../context/firebase';
import { useBoardsValue, useCollectionsValue } from '../../context';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

export const MoreButtonContainer = (props) => {
  const [listItemModal, setListItemModal] = useState(false);
  const [warnModal, setWarnModal] = useState(false);
  const board = props.board;
  const propCollection = props.collection;

  const { collection } = useCollectionsValue();
  const { boards } = useBoardsValue();

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
  let history = useHistory();
  const handleBoardDelete = async (docId) => {
    const currCollection = collection.indexOf(propCollection);

    if (propCollection !== undefined) {
      await firebase
        .firestore()
        .collection('collections')
        .doc(docId)
        .delete()
        .then(() => {
          if (boards.some((board) => board.collectionId === docId)) {
            boards
              .filter((board) => board.collectionId === docId)
              .forEach((board) =>
                firebase
                  .firestore()
                  .collection('boards')
                  .doc(board.boardId)
                  .delete()
                  .then(() => {})
                  .catch((error) => console.error(error))
              );
          }

          if (currCollection > -1) {
            collection.splice(currCollection, 1);
          }
          if (propCollection === undefined) {
            history.push('/dashboard');
          }
        })
        .catch((error) => console.error(error));
    } else {
      await firebase
        .firestore()
        .collection('boards')
        .doc(docId)
        .delete()
        .then(() => {
          if (currCollection > -1) {
            collection.splice(currCollection, 1);
          }
          if (propCollection === undefined) {
            history.push('/dashboard');
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <>
      <Sidebar.MoreButton hover={listItemModal ? true : false} id="more-btn">
        <BiDotsVerticalRounded
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
                        handleBoardDelete(
                          propCollection !== undefined
                            ? propCollection.docId
                            : board.docId
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
