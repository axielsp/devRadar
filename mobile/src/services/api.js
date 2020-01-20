import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.90.91.108:3333',
});

export default api;