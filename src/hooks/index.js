import { useState, useEffect } from 'react';
import moment from 'moment';
import { firebase } from '../firebase';
import { collatedNotesExist } from '../helpers';

export const useNotes = (selectedBoard) =>
{
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);

  useEffect(() =>
  {
    let unsubscribe = firebase
      .firestore()
      .collection('notes')
      .where('userId', '==', 'ZroloardSwozGoognMXbXX');

    unsubscribe =
      selectedBoard && !collatedNotesExist(selectedBoard)
        ? (unsubscribe = unsubscribe.where('boardId', '==', selectedBoard))
        : selectedBoard === 'Today'
          ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY')
          ))
          : selectedBoard === 'Inbox' || selectedBoard === 0
            ? (unsubscribe = unsubscribe.where('date', '==', ''))
            : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapshot) =>
    {
      const newNotes = snapshot.docs.map((note) => ({
        id: note.id,
        ...note.data(),
      }));

      setNotes(
        selectedBoard === 'In Progress'
          ? newNotes.filter(
            (note) =>
              moment(note.date, 'DD-MM-YY').diff(moment(), 'days') <= 7 &&
              note.archived !== true
          )
          : newNotes.filter((note) => note.archived !== true)
      );

      setArchivedNotes(newNotes.filter((note) => note.archived !== false));
    });

    return () => unsubscribe();
  }, [selectedBoard]);

  return { notes, archivedNotes };
};

export const useBoards = () =>
{
  const [boards, setBoards] = useState([]);


  useEffect(() =>
  {
    firebase
      .firestore()
      .collection('boards')
      .where('userId', '==', 'ZroloardSwozGoognMXbXX')
      .orderBy('boardId')
      .get()
      .then((snapshot) =>
      {
        const allBoards = snapshot.docs.map((board) => ({
          ...board.data(),
          docId: board.id,
        }));

        // To aviod infinite loop on boards, we are simply checking if the boards has changed.
        if (JSON.stringify(allBoards) !== JSON.stringify(boards)) {
          setBoards(allBoards);
        }
      });
    console.log('');
  }, [boards]);

  return { boards, setBoards };
};
