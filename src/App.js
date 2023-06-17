import React from "react";
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Videos
import Header from "./components/header";
import Principal from "./pages/Clients";
import ClientForm from "./components/Clients/clientForm";
/**
 * Rutas de la aplicación
 */
function App() {
  
  return (
    <>
      <BrowserRouter>  
      <StyledEngineProvider injectFirst>
        <Header />
      </StyledEngineProvider>
      <div className=" mt-4">
        <Routes>
          <Route exact path="/client/list" element={<Principal />} />            
          <Route path="/client/create" element={<ClientForm />} />
          <Route path="/updateClient/:id" element={<ClientForm />} />        
        </Routes>
        <br></br>
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;
