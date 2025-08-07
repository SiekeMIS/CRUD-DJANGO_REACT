// Importa el hook useNavigate de react-router-dom para la navegación programática
import { useNavigate } from 'react-router-dom';

// Componente CachorroCard que muestra la tarjeta de un cachorro
export function CachorroCard({ cachorros }) {
    // Hook para navegación entre rutas
    const navigate = useNavigate();
    
    return (
        // Contenedor principal de la tarjeta
        <div
            className="w-full max-w-sm bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
            // Al hacer click navega a la página de detalle del cachorro
            onClick={() => {
                navigate(`/cachorros/${cachorros.id}`);
            }}
        >
            {/* Sección del nombre */}
            <div className="mb-3">
                <h1 className='text-xl font-bold text-gray-800 uppercase tracking-wide mb-2'>
                    {cachorros.name_cachorro}  {/* Muestra el nombre del cachorro */}
                </h1>
                {/* Barra decorativa */}
                <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
            </div>
            
            {/* Sección de descripción */}
            <p className='text-gray-600 leading-relaxed min-h-[4rem] flex items-start'>
                {/* Muestra la descripción o un texto por defecto si no hay */}
                {cachorros.description_cachorro || "Sin descripción disponible"}
            </p>
            
            {/* Indicador de estado de adopción (solo se muestra si está adoptado) */}
            {cachorros.adoptado && (
                <div className="mt-4 inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    ✅ Adoptado
                </div>
            )}
        </div>
    );
}