import { Button } from '@material-ui/core';
import { Add, Edit } from '@material-ui/icons';

export default function InputNote(props) {
    const { note, dispatch } = props;
    return (
        <section className="input-note-container">
            <input
                type="text"
                name="title"
                value={note.title}
                placeholder="type a title...     🗒️"
                autoComplete='off'
                onChange={(e) =>
                    dispatch({
                        type: 'inputChange',
                        value: e.target.value,
                    })
                }
            />
            <textarea
                name="content"
                value={note.content}
                placeholder="type your notes..."
                onChange={(e) =>
                    dispatch({
                        type: 'textareaChange',
                        value: e.target.value,
                    })
                }
            />
            {note.isEdit ? (
                <Button onClick={() => dispatch({ type: 'generateNote' })}>
                    <Edit />
                </Button>
            ) : (
                <Button
                    onClick={() => {
                        dispatch({ type: 'generateNote' });
                        dispatch({ type: 'emptyVal' });
                    }}
                >
                    <Add />
                </Button>
            )}
        </section>
    );
}
