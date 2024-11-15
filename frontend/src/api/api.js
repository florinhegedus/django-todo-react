import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || '', // Fallback to proxy in development
});

export default api;