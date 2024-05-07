import * as React from 'react';
import { Box as MuiBox } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
    styled,
    Toolbar,
    Typography, useTheme
} from "@mui/material";
import { useKeycloak } from '@react-keycloak/web';
import Button from '@mui/material/Button';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Tooltip from '@mui/material/Tooltip';


function LoginButton() {
    const { keycloak, initialized } = useKeycloak();
  
    const handleLogin = () => {
      keycloak.login();
    };
  
    const handleLogout = () => {
      keycloak.logout();
    };
  
    if (!initialized) {
      return <div>Laden...</div>; 
    }
  
    return (
      <div>
        {keycloak.authenticated ? (
          <Button variant="contained" color="secondary" onClick={handleLogout} style={{ backgroundColor: '#ff572', color: 'white' }} > 
            Ausloggen
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleLogin} >
            Einloggen
          </Button>
        )}
      </div>
    );
  }


function App() {
    const { keycloak, initialized } = useKeycloak();
    console.log("Keycloak initialized:", initialized);
    console.log("Is authenticated:", keycloak.authenticated);
    const [rows, setRows] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState({
        id: null,
        Bezeichnung: "",
        AnzahlLektionen: "",
        LinkZuBaukasten: ""
    });
    if (!initialized) {
      return <div>Laden...</div>;
    }
  
    if (!keycloak.authenticated) {
      return (
          <div>
              <div>Zugriff verweigert. Bitte einloggen.</div>
              <LoginButton />
          </div>
      );
    }

    const handleOpen = (module) => {
        setCurrentEmployee(module || {
          id: null,
          Bezeichnung: "",
          AnzahlLektionen: "",
          LinkZuBaukasten: ""
        });
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      

      

      return (
        <div style={{ height: 400, width: '100%' }}>
          <h1>Module</h1>
          <LoginButton/>
          <Tooltip title="Neues Modul erstellen">
            <IconButton class="iconButton" color="primary" onClick={() => handleOpen(null)}>
              <AddCircleOutlineIcon />
              <p>Add Module</p>
            </IconButton>
          </Tooltip>
          </div>
      );
          


      <DataGrid
      rows={rows}
      columns={[ 
        { field: "Bezeichnung", headerName: "Modul Bezeichnung", width: 150 },
        { field: "AnzahlLektionen", headerName: "Lektionen", width: 100 },
        { field: "LinkZuBaukasten", headerName: "Link zum Baukasten", width: 200 },
    ]}
    pageSize={5}
    rowsPerPageOptions={[5]}
  />





};

export default App;