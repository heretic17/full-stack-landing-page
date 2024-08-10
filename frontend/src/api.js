import axios from 'axios';
import { ACCESS_TOKEN } from "./constants";

// Remove dotenv, as it's not needed in a Vite environment

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Make sure this is correctly defined in your .env file
});

// Log the base URL for debugging
console.log('Base URL:', import.meta.env.VITE_API_URL);

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

console.log('Axios instance:', api); // Log the Axios instance configuration for debugging

export default api;
