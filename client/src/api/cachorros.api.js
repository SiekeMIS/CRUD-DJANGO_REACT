// Importa la librería axios para hacer peticiones HTTP
import axios from 'axios';

// Crea una instancia de axios configurada para la API de cachorros
const cachorrosApi = axios.create({
    // URL base para todas las peticiones a la API de cachorros
    baseURL: 'http://127.0.0.1:8000/cachorros/api/c1/cachorros',
    
    // Configuración de los headers por defecto
    headers: {
        'Content-Type': 'application/json', // Indica que se enviarán/recibirán datos en formato JSON
    }
});

// Exporta funciones para interactuar con la API:

// Obtiene todos los cachorros (GET a la raíz de la URL)
export const getAllCachorros = () => cachorrosApi.get('/');

// Crea un nuevo cachorro (POST con los datos del cachorro)
export const createCachorro = (cachorro) => cachorrosApi.post('/', cachorro);

// Elimina un cachorro por su ID (DELETE a /id/)
export const deleteCachorro = (id) => cachorrosApi.delete(`/${id}/`);

// Actualiza un cachorro por su ID (PUT a /id/ con los nuevos datos)
export const updateCachorro = (id, cachorro) => cachorrosApi.put(`/${id}/`, cachorro);

// Obtiene un cachorro específico por su ID (GET a /id/)
export const getCachorroById = (id) => cachorrosApi.get(`/${id}/`);