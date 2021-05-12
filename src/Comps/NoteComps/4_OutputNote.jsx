import { Button } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { useRef } from 'react';

export default function OutputNote(props) {
    const { note_arr, dispatch } = props;

    return (
        <section className="output-note-container">
            {note_arr.map((note) => {
                return (
                    <div key={note.id}>
                        <h1>{note.title}</h1>
                        <p
                            style={{
                                textDecoration: note.isEdit
                                    ? 'line-through'
                                    : null,
                            }}
                        >
                            {note.content}
                        </p>
                        <Button
                            className="editBtn"
                            onClick={() =>
                                dispatch({
                                    type: 'editNote',
                                    id: note.id,
                                    title: note.title,
                                    content: note.content,
                                })
                            }
                        >
                            <Edit />
                        </Button>
                        <Button
                            className="deleteBtn"
                            onClick={() =>
                                dispatch({ type: 'deleteNote', id: note.id })
                            }
                        >
                            <Delete />
                        </Button>
                    </div>
                );
            })}
        </section>
    );
}
