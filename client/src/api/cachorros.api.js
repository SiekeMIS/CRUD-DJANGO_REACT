import axios from 'axios';

export const getallCachorros = () => {
    const res = axios.get('http://localhost:8000/cachorros/api/c1/cachorros/')
    return res;
} 