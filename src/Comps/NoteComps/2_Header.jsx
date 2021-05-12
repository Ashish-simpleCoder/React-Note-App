import { Switch } from '@material-ui/core';
import { Notes } from '@material-ui/icons';

export default function Header() {
    return (
        <header>
            <span className="icon">
                <Notes />
            </span>
            <h1>Amazing Note App</h1>
            <Switch
                onClick={() => document.body.classList.toggle('dark-theme')}
                // style={{ textAlign: 'right' }}
            ></Switch>
        </header>
    );
}
