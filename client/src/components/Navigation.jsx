import {Link} from 'react-router-dom';

export function Navigation() {
    return (
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <Link to="/cachorros">
                <h1 className="font-bold text-lg mb-2">Aplicacion de cachorros</h1>
            </Link>
            <Link to="/cachorros-create">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Crear Un Cachorros
                </button>
            </Link>
        </div>
    );
}
