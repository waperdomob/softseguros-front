import React from "react";

/**
 * Verifica si los clientes ya fueron cargados.
 * @param {component} Component 
 * @returns
 */
function ClientLoading(Component) {
  /**
    * @param {boolean} isLoading 
    * @param {Object} props
    * @returns  Si ya cargaron los Clients se retorna un componente recibido en la función main de lo contrario retorna mensaje indicando que aún se estan cargando.
  */
  return function ClientLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ fontSize: "25px" }}>
        We are waiting for the data to load!...
      </p>
    );
  };
}
export default ClientLoading;