import React, { useEffect, useState } from "react";

import * as clientServer from "../services/clientServer";
import ClientsList from "../components/Clients/clientsList";
import clientLoadingComponent from "../components/Clients/clientsLoading";
//components
import Container from '@mui/material/Container';


/**
 * Carga todos los clientes para el Home de la aplicación
 */
const  Principal = () =>{
    const ClientLoading = clientLoadingComponent(ClientsList);
  
    const [appState, setAppState] = useState({
      loading: true,
      clients: null,
    });
  
    
    useEffect(() => {
        clientServer.clientsList().then((res) => {
        const allClients = res.clients;
        setAppState({ loading: false, clients: allClients });
      });
    }, [setAppState]);
  
    return (
      <Container>
        
        <br/>
        <div className="App">
          <ClientLoading isLoading={appState.loading} clients={appState.clients} />
        </div>
      </Container>
    );
    
  }
  export default Principal;