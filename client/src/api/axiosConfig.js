import axios from 'axios';

// If we are in development, use localhost. If in production, use empty string (relative path)
const isDevelopment = import.meta.env.MODE === 'development';
const API = axios.create({
    baseURL: isDevelopment ? 'http://localhost:5000' : ''
});

export default API;