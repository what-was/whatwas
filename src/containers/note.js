import React from 'react';
import
{
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";


export const NoteContainer = () =>
{
    let { noteId } = useParams();
    console.log(noteId);

    return null;
}