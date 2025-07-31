import axios from 'axios';

const cachorrosApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/cachorros/api/c1/cachorros',
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getAllCachorros = () => cachorrosApi.get('/');
export const createCachorro = (cachorro) => cachorrosApi.post('/', cachorro);
export const deleteCachorro = (id) => cachorrosApi.delete(`/${id}/`);