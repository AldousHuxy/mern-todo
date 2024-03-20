import axios from 'axios';

export const axiosClient = axios.create({ baseURL: 'http://localhost:2000/api' })