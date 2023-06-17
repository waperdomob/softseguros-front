/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

//dependencies
import SearchComponent from "./searchClient";
import * as clientServer from "../../services/clientServer";

import './../../index.css';
import Button from '@mui/material/Button';

 /**
 * Arrow Función para organizar los clientes en una tabla y el buscador
 * @returns Tabla con clientes y botones de acción (Editar, eliminar)
 */
const DataTable = ({clients}) => {
    const history = useNavigate();
    const [search, setSearch] = useState("");
    const [clientes, setClients] = useState([]);

    useEffect(() => {
        setClients(clients);
    },[clients])

    const handleDelete = async (clientID) => {
        await clientServer.DeleteClient(clientID)
        window.location.reload();
      };
    let result =[]
    /**
     * Condicional para el buscador, si no hay nada escrito se retornan todos los datos, de lo contrario realiza la busqueda
     */
    if (!search) {
        result=clientes
    } 
    else if(isNaN(search)){

        result= clientes.filter((dato)=>
        dato.fullname.toString()
        .toLowerCase()
        .indexOf(search.toLowerCase()) > -1
        )
    }
    else{
        result = clientes.filter((dato)=>
        dato.date_joined.toString()
        .toLowerCase()
        .indexOf(search.toLowerCase()) > -1
        )
    }
    
    
  return (
    <div>
        <h2 className="text-center">Clientes Softseguros</h2>
        <br/>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Button
        color="primary"
        variant="outlined"
        className="btn btn-success me-md-2 mb-2" 
        component={NavLink}
        to="/client/create">+ Agregar Cliente</Button>
        </div>
        <SearchComponent 
        clients={clients} 
        search={search}
        setsearch={setSearch}
        />
        <table className="table table-striped table-hover mt-3 shadow-lg">
            <thead>
                <tr className="bg-curse text-white">
                    <th>FULLNAME</th>
                    <th>EMAIL</th>
                    <th>BIRTHDATE</th>
                    <th>JOINED_DATE</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                    { result.map( (client)=>(
                        <tr key={client.id}>
                            <td>{client.fullname}</td>
                            <td>{client.email}</td>
                            <td>{client.birthdate}</td>
                            <td>{client.date_joined}</td>
                            <td>
                                <button
                                    onClick={() => history(`/updateClient/${client.id}`)}
                                    className="ms-6 btn  btn-info"
                                    >
                                    Update
                                    </button>
                                    <button
                                    onClick={() => client.id && handleDelete(client.id)}
                                    className="btn btn-danger my-2"
                                    >
                                    Eliminar
                                    </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>
    </div>
  );
}
export default DataTable;