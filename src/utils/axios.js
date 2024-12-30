// utils/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1',  // This matches your Django API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
