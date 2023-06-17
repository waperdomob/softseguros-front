import React from "react";
import { NavLink } from "react-router-dom";

//componentes

import Button from '@mui/material/Button';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles((theme) => ({
  
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

/**
 * Componente Header
 * @returns Componentes de header con botones de navegación
 */
const Header = () => {
  const classes = useStyles();
    return (
        
        <>
            <Button
            className={classes.link}
            component={NavLink}
            variant="outlined"
            color="primary"
            to="/client/list"
            >
            Home
            </Button>
            <Button
            className={classes.link}
            component={NavLink}
            variant="outlined"
            color="primary"
            to="/client/list"
            >
            Clientes
            </Button>
            <Button
            className={classes.link}
            component={NavLink}
            variant="outlined"
            color="primary"
            to="/client/create"
            >
            Registrar Cliente
            </Button>
        </>
       
    )
    }
export default Header;