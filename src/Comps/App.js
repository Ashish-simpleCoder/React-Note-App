import React, { lazy, Suspense } from 'react';
// import NoteApp from './NoteComps/1_NoteApp';
const NoteApp = lazy(() => import('./NoteComps/1_NoteApp'));

const App = () => {
    return (
        <Suspense
            fallback={
                <h1
                    style={{
                        fontSize: '4rem',
                        textAlign: 'center',
                        height: '100vh',
                        width: '100vw',
                        color: 'black',
                    }}
                >
                    Loading...
                </h1>
            }
        >
            <NoteApp />
        </Suspense>
    );
};

export default App;
