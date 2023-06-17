import axiosInstance from "../axios";

const API_URL = "http://127.0.0.1:8000/clients/";
const API_URL_CREATE = "http://127.0.0.1:8000/client/create/";

/**
 * Función para consultar con el backend la lista de todos los clientes.
 * @returns La data enviada desde el backend. 
 */
export const clientsList = async () => {
    const response = await axiosInstance.get(`${API_URL}`);
    if (response.status === 200) {
      return await response.data;
    }
  };

  /**
 * Función para consultar con el backend un cliente con el id específico.
 * @returns La data enviada desde el backend. 
 */

  export const getClient = async (clientID) => {
    const response = await axiosInstance.get(`${API_URL}${clientID}`);
    if (response.status === 200) {
      return await response.data;
    }
  };

  /**
 * Función Post para enviar los datos del formulario de registro de un nuevo CLIENTE.
 * @returns La data enviada desde el backend. 
 */
export const RegisterClient = async (newClient) => {
    console.log(newClient);
    const response = await axiosInstance.post(API_URL_CREATE, newClient);
    if (response.status === 201) {
      return await response.data;
    }
    else if(response.status === 400) {
      return await response.data;
    }
  };

  /**
 * Función para actualizar un cliente.
 * @returns La data enviada desde el backend. 
 */

  export const UpdateClient = async (clientID, updateClient) => {
    const response = await axiosInstance.put(
      API_URL + clientID + "/",
      updateClient
    );
    if (response.status === 200) {
      return await response.data;
    }
  };

/**
 * Función para eliminar un cliente.
 * @returns La data enviada desde el backend. 
 */
export const DeleteClient = async (clientID) => {
    return await axiosInstance.delete(`${API_URL}${clientID}`);
  
  };