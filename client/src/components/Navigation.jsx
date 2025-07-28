import {Link} from 'react-router-dom';

export function Navigation() {
    return (
        <div>
            <Link to="/cachorros">
                <h1>aplicacion de cachorros</h1>
            </Link>
            <Link to="/cachorros-create">Cachorros</Link>
        </div>
    );
}
