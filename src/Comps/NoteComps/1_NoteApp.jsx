import React, { useEffect, useReducer } from 'react';
import Header from './2_Header';
import InputNote from './3_InputNote';
import OutputNote from './4_OutputNote';
import reducer from './5_Reducer';

function UPDATE_LOCAL_STORAGE() {
    let notes;
    if (localStorage.getItem('notes')) {
        return (notes = JSON.parse(localStorage.getItem('notes')));
    } else return (notes = []);
}
const default_state = {
    note: {
        id: '',
        title: '',
        content: '',
        isEdit: false,
    },
    note_arr: UPDATE_LOCAL_STORAGE(),
};

export default function NoteApp() {
    const [state, dispatch] = useReducer(reducer, default_state);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(state.note_arr));
    }, [state.note_arr]);
    return (
        <main>
            <Header />
            <InputNote note={state.note} dispatch={dispatch} />
            <OutputNote note_arr={state.note_arr} dispatch={dispatch}/>
        </main>
    );
}
