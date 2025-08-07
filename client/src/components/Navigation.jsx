// Importa el componente Link de react-router-dom para navegación sin recargar la página
import { Link } from 'react-router-dom';

// Componente Navigation que muestra la barra de navegación
export function Navigation() {
    return (
        // Contenedor principal con estilos de fondo, texto y espaciado
        <div className="bg-gray-800 text-white p-4 rounded-lg flex justify-between items-center">
            {/* Enlace a la página principal de cachorros */}
            <Link to="/cachorros" className="hover:text-gray-300 transition-colors duration-200">
                <h1 className="font-bold text-lg">Aplicación de Cachorros</h1>
            </Link>

            {/* Botón para crear nuevos cachorros */}
            <Link to="/cachorros-create">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 shadow hover:shadow-md">
                    Crear un Cachorro
                </button>
            </Link>
        </div>
    );
}