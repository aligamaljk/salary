import axios from 'axios';
  export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_STRAPI_BASE_URL,
  headers: {
    "Content-Type": 'application/json',
  },
});


export default axiosInstance
