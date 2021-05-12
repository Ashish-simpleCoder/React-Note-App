const reducer = (state, action) => {
    if (action.type === 'inputChange') {
        return {
            ...state,
            note: { ...state.note, title: action.value },
        };
    }
    if (action.type === 'textareaChange') {
        return {
            ...state,
            note: { ...state.note, content: action.value },
        };
    }
    if (action.type === 'generateNote') {
        if (!state.note.title || !state.note.content) {
            return { ...state };
        } else if (
            state.note.title &&
            state.note.content &&
            state.note.isEdit
        ) {
            let new_note_arr = state.note_arr.map((note) => {
                if (note.id === state.note.id) {
                    return {
                        ...state,
                        title: state.note.title,
                        content: state.note.content,
                    };
                } else {
                    return { ...note };
                }
            });
            return {
                ...state,
                note: {
                    ...state.note,
                    title: '',
                    content: '',
                    id: '',
                    isEdit: false,
                },
                note_arr: new_note_arr,
            };
        }
        let id = new Date().getTime().toString();
        let new_note = { ...state.note, id };
        let new_note_arr = [new_note, ...state.note_arr];
        return {
            ...state,
            note_arr: new_note_arr,
        };
    }
    if (action.type === 'emptyVal') {
        if (!state.note.title || !state.note.content) {
            return { ...state };
        }
        return {
            ...state,
            note: { ...state.note, title: '', content: '' },
        };
    }
    if (action.type === 'deleteNote') {
        let new_note_arr = state.note_arr.filter((note) => {
            return note.id !== action.id;
        });
        return {
            ...state,
            note_arr: new_note_arr,
        };
    }
    if (action.type === 'editNote') {
        let new_title = action.title;
        let new_content = action.content;
        if (state.note.title && state.note.content && state.note.isEdit) {
            return {
                ...state,
                note: {
                    ...state.note,
                    title: '',
                    content: '',
                    isEdit: false,
                    id: '',
                },
            };
        }
        return {
            ...state,
            note: {
                ...state.note,
                title: new_title,
                content: new_content,
                id: action.id,
                isEdit: !state.note.isEdit,
            },
        };
    }
};

export default reducer;
