import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as ClientServer from "../../services/clientServer"

/**
 * Formulario para creación y actualización de un cliente
 * @returns Componente form
 */
const ClientForm = () => {
  const history = useNavigate();
  const params = useParams();

  const initialState = {
    id: 0,
    fullname: "",
    email: "",
    id_number: 0,
  };
  const [date, setDate] = useState(new Date());

  const [client, setClient] = useState(initialState);

  const onDateChange = (event) => {
    setDate(event.target.value);
 };

  const handleInputChange = (e) => {
    let target = e.target;
    let name = target.name;
    
    setClient({ ...client, [name]: e.target.value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    try {
      //let res;
      formData.append("fullname", client.fullname);
      formData.append("email", client.email);
      formData.append("id_number", client.id_number);
      formData.append("birthdate", date);

      let res;
      if (!params.id) {
        res = await ClientServer.RegisterClient(formData);
      } else {
        res = await ClientServer.UpdateClient(params.id, formData);        
      }
      alert(res.message);
      history("/client/list");
    } catch (error) {
      for (const property in error.response.data) {
        alert(`${property}: ${error.response.data[property]}`);
      }      
    }
  };

  const getClient = async (clientID) => {
    try {
      const res = await ClientServer.getClient(clientID);
      const data = await res;
      const {
        fullname,
        email,
        id_number,
      } = data;
      
      setClient({
        fullname,
        email,
        id_number,
      });
      setDate(data.birthdate);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (params.id) {
      getClient(params.id);
      
    }
  }, [params.id]);


    return (
      <div className="col-md-6 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="fullname">
              Nombre Completo
            </label>
            <input
              className="form-control"
              id="fullname"
              name="fullname"
              value={client.fullname || ""}
              onChange={handleInputChange}
              type="text"
              placeholder="Nombre Completo"
              required
              maxLength="150"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="form-control"
              id="email"
              name="email"
              value={client.email || ""}
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
              required
              maxLength="150"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="id_number">
              Número de documento
            </label>
            <input
              className="form-control"
              id="idNumber"
              name="id_number"
              value={client.id_number|| 0}
              onChange={handleInputChange}
              type="number"
              placeholder="Número de documento"
              required
              maxLength="150"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="birthdate">
             Fecha de nacimiento
            </label>
            <input
              className="form-control"
              id="birthdate"
              name="bithdate"
              type="date"
              value={date }
              onChange={onDateChange}
              required
            />
          </div>

          <div className="d-grid">
            {params.id ? (
              <button
                className="btn btn-primary btn-lg"
                id="submitButton"
                type="submit"
              >
                Update
              </button>
            ) : (
              <button
                className="btn btn-success btn-lg"
                id="submitButton"
                type="submit"
              >
                Guardar
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }


export default ClientForm;