import React, {useEffect, useState} from "react";
import { Box as MuiBox } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    List, ListItem, ListItemButton, ListItemIcon, ListItemText,
    styled,
    Toolbar,
    Typography, useTheme
} from "@mui/material";
import { useKeycloak } from '@react-keycloak/web';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Tooltip from '@mui/material/Tooltip';
import DeleteOutlined from '@mui/icons-material/DeleteOutline'
import EditIcon from '@mui/icons-material/Edit';
import JsonView from "@uiw/react-json-view";
import {toast} from "react-toastify";
import {key} from "localforage";
import {ModulService} from "../../data/DataService";



const ModulPage = () => {
  const {keycloak, initialized} = useKeycloak();
  const [modulData, setModulData] = useState(null);
  const [modulEditData, setModulEditData] = useState({
    id: 0,
    Bezeichnung: "",
    AnzahlLektionen: "",
    LinkZuBaukasten: ""
  })

  useEffect(() => {
    getModul().then(() => toast("Fetched Modul", {type: "success"}));
}, []);

async function getModul() {
    ModulService.getAll().then(data => setModulData(data))
}

if (!initialized)
    return "Loading ...";

let buttonText;

// Ternary Operator
buttonText = keycloak.authenticated ? "Logout" : "Login";

const handleButtonClick = () => {
    if (keycloak.authenticated) {
        keycloak.logout();
    } else {
        keycloak.login();
    }
}

function handleDeleteModul(id) {
    toast(`Modul ${id} requested for deletion`, {type: "info"})
    ModulService.delete(id).then(() => getModul());
}

function handleFormChange(key, value) {
    setModulEditData({
        ...modulEditData,
        [key]: value
    })
}

function handleFormSave() {
    if (modulEditData.Bezeichnung && modulEditData.AnzahlLektionensdatum && modulEditData.LinkZuBaukasten) {
        if(modulEditData.id)
        {
            ModulService.put(modulEditData.id, modulEditData).then(() => {
                getModul();
                toast("Modul updated successfully", {type: "success"});
                setModulEditData({
                  id: 0,
                  Bezeichnung: "",
                  AnzahlLektionen: "",
                  LinkZuBaukasten: ""
                })
            }).catch((error) => toast("Could not update Modul: " + error.message, {type: "error"}))
        }
        else {
            ModulService.post(modulEditData).then(() => {
                getModul();
                toast("Modul inserted successfully", {type: "success"});
                setModulEditData({
                  id: 0,
                  Bezeichnung: "",
                  AnzahlLektionen: "",
                  LinkZuBaukasten: ""
                })
            }).catch((error) => toast("Could not insert Modul: " + error.message, {type: "error"}));
        }
    }
}

function handleEditModul(id) {
    ModulService.get(id).then(data => setModulEditData(data));
}

return (
    <>
        <h1>Demo Keycloak</h1>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>{buttonText}</Button>
        <p>Is Keycloak Authenticated: <b>{keycloak.authenticated.toString()}</b></p>

        <div style={{marginBlock: ".5em", padding: "2em", border: "solid 1px gray", borderRadius: "5px"}}>
            <TextField label="Name" value={modulEditData.Bezeichnung}
                       onChange={(event) => handleFormChange("Bezeichnung", event.target.value)}
                       variant="outlined" size={"small"}/>
            <TextField label="Geburtsdatum" value={modulEditData.AnzahlLektionensdatum}
                       onChange={(event) => handleFormChange("AnzahlLektionen", event.target.value)}
                       variant="outlined" size={"small"}/>
            <TextField label="PLZ" value={modulEditData.LinkZuBaukasten}
                       onChange={(event) => handleFormChange("LinkZuBaukasten", event.target.value)}
                       variant="outlined" size={"small"}/>
            <Button variant={"contained"} color={"success"} onClick={handleFormSave}>Speichern</Button>
            <JsonView value={modulEditData}/>
        </div>

        {
            modulData && (
                <TableContainer component={Paper}>
                    <Table size={"small"}>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Bezeichnung</TableCell>
                                <TableCell>AnzahlLektionen</TableCell>
                                <TableCell>LinkZuBaukasten</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {modulData.map((modul) => (
                                <TableRow key={modul.id}>
                                    <TableCell>{modul.id}</TableCell>
                                    <TableCell>{modul.Bezeichnung}</TableCell>
                                    <TableCell>{modul.AnzahlLektionensdatum}</TableCell>
                                    <TableCell>{modul.LinkZuBaukasten}</TableCell>
                                    <TableCell>
                                        <IconButton color={"error"} onClick={() => handleDeleteModul(modul.id)}>
                                            <DeleteOutlined/>
                                        </IconButton>
                                        <IconButton color={"primary"} onClick={() => handleEditModul(modul.id)}>
                                            <EditIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }
    </>
);
}

/*
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





};*/

export default ModulPage;