// Importa los hooks de React para manejar estado y efectos
import { useEffect, useState } from "react";
// Importa la función para obtener todos los cachorros desde la API
import { getAllCachorros } from "../api/cachorros.api";
// Importa el componente CachorroCard para mostrar cada tarjeta
import { CachorroCard } from "./CachorrosCard";

// Componente CachorrosList que muestra una lista de cachorros
export function CachorrosList() {
    // Estado para almacenar la lista de cachorros
    const [cachorros, setCachorros] = useState([]);

    // Efecto que se ejecuta al montar el componente
    useEffect(() => {
        // Función asíncrona para cargar los cachorros
        async function loadCachorros() {
            const res = await getAllCachorros();  // Llama a la API
            setCachorros(res.data);  // Actualiza el estado con los datos recibidos
        }
        loadCachorros();  // Ejecuta la función de carga

        console.log("CachorrosList component mounted");  // Mensaje de depuración
    }, []);  // Array de dependencias vacío = se ejecuta solo al montar

    return (
        <div className="w-full">
            {/* Encabezado de la sección */}
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Nuestros Cachorros</h2>
                <p className="text-gray-600">Encuentra a tu compañero perfecto</p>
            </div>

            {/* Contenedor del grid de cachorros */}
            <div className="flex justify-center">
                <div className="w-full max-w-7xl">
                    {/* Grid responsivo de tarjetas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
                        {/* Mapea cada cachorro a un componente CachorroCard */}
                        {cachorros.map(cachorro => (
                            <CachorroCard key={cachorro.id} cachorros={cachorro} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mensaje condicional cuando no hay cachorros */}
            {cachorros.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-gray-400 text-6xl mb-4">🐕</div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No hay cachorros disponibles</h3>
                    <p className="text-gray-500">¡Sé el primero en agregar uno!</p>
                </div>
            )}
        </div>
    );
}