import axios from "axios";

const API_URL = "https://softseguros-clients.onrender.com/";
//const API_URL = "http://127.0.0.1:8000/";

/**
 * Función para realizar las peticiones al backend 
 */
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {  
    "Content-Type": "application/json",
    accept: "application/json",
  },
});



export default axiosInstance;