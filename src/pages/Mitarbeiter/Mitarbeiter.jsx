import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button'; 
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { useKeycloak } from '@react-keycloak/web';
import JasonView from "@uiw/react-json-view";


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
    firstName: '',
    lastName: '',
    birthdate: '',
    department: '',
    email: '',
    phone: '',
    hireDate: '',
    salary: '',
    street: '',
    houseNumber: '',
    zipCode: '',
    city: '',
    country: '',
    gender: ''
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

  const handleOpen = (employee) => {
    setCurrentEmployee(employee || {
      id: null,
      firstName: '',
      lastName: '',
      birthdate: '',
      department: '',
      email: '',
      phone: '',
      hireDate: '',
      salary: '',
      street: '',
      houseNumber: '',
      zipCode: '',
      city: '',
      country: '',
      gender: ''
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const formattedEmployee = {
      ...currentEmployee,
      birthdate: currentEmployee.birthdate ? new Date(currentEmployee.birthdate).toISOString().slice(0, 10) : null,
      hireDate: currentEmployee.hireDate ? new Date(currentEmployee.hireDate).toISOString().slice(0, 10) : null
    };

    if (formattedEmployee.id) {
      setRows(rows.map(row => row.id === formattedEmployee.id ? formattedEmployee : row));
    } else {
      const newId = rows.length + 1;
      setRows([...rows, { ...formattedEmployee, id: newId }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

//----
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Mitarbeiter</h1>
      <LoginButton/>
      <Tooltip title="Neuen Mitarbeiter erstellen">
        <IconButton color="primary" onClick={() => handleOpen(null)}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Tooltip>
      <DataGrid
        rows={rows}
        columns={[
          { field: "firstName", headerName: "Vorname", width: 130 },
          { field: "lastName", headerName: "Name", width: 130 },
          { field: "birthdate", headerName: "Geburtstag", type: "date", width: 90 },
          { field: "department", headerName: "Abteilung", width: 130 },
          { field: "email", headerName: "Email", width: 200 },
          { field: "phone", headerName: "Telefon", width: 130 },
          { field: "hireDate", headerName: "Anstellungsdatum", type: "date", width: 130 },
          { field: "salary", headerName: "Gehalt", type: "number", width: 130 },
          { field: "street", headerName: "Straße", width: 180 },
          { field: "houseNumber", headerName: "Hausnummer", width: 120 },
          { field: "zipCode", headerName: "PLZ", width: 80 },
          { field: "city", headerName: "Ort", width: 120 },
          { field: "country", headerName: "Land", width: 100 },
          { field: "gender", headerName: "Geschlecht", width: 120 },
          {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            renderCell: (params) => (
              <>
                <Tooltip title="Bearbeiten">
                  <IconButton onClick={() => handleOpen(params.row)} color="secondary">
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Löschen">
                  <IconButton onClick={() => handleDelete(params.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </>
            ),
          },
        ]}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentEmployee.id ? "Mitarbeiter bearbeiten" : "Neuen Mitarbeiter erstellen"}</DialogTitle>
        <DialogContent>
           <TextField
            autoFocus
            margin="dense"
            label="Vorname"
            type="text"
            fullWidth
            value={currentEmployee.firstName}
            onChange={(e) =>
              setCurrentEmployee({
                ...currentEmployee,
                firstName: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={currentEmployee.lastName}
            onChange={(e) =>
              setCurrentEmployee({
                ...currentEmployee,
                lastName: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Geburtstag"
            type="date"
            fullWidth
            value={currentEmployee.birthdate}
            onChange={(e) =>
              setCurrentEmployee({
                ...currentEmployee,
                birthdate: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Abteilung"
            type="text"
            fullWidth
            value={currentEmployee.department}
            onChange={(e) =>
              setCurrentEmployee({
                ...currentEmployee,
                department: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Email"
            type="text"
            fullWidth
            value={currentEmployee.email}
            onChange={(e) =>
              setCurrentEmployee({ ...currentEmployee, email: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Tel-Num."
            type="text"
            fullWidth
            value={currentEmployee.phone}
            onChange={(e) =>
              setCurrentEmployee({ ...currentEmployee, phone: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Anstellungsdatum"
            type="date"
            fullWidth
            value={currentEmployee.hireDate}
            onChange={(e) =>
              setCurrentEmployee({
                ...currentEmployee,
                hireDate: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Gehalt"
            type="number"
            fullWidth
            value={currentEmployee.salary}
            onChange={(e) =>
              setCurrentEmployee({ ...currentEmployee, salary: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Strasse"
            type="text"
            fullWidth
            value={currentEmployee.street}
            onChange={(e) =>
              setCurrentEmployee({ ...currentEmployee, street: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="PLZ"
            type="text"
            fullWidth
            value={currentEmployee.zipCode}
            onChange={(e) =>
              setCurrentEmployee({
                ...currentEmployee,
                zipCode: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Ort"
            type="text"
            fullWidth
            value={currentEmployee.city}
            onChange={(e) =>
              setCurrentEmployee({ ...currentEmployee, city: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Land"
            type="text"
            fullWidth
            value={currentEmployee.country}
            onChange={(e) =>
              setCurrentEmployee({
                ...currentEmployee,
                country: e.target.value,
              })
            }
          />
          <FormControl fullWidth margin="dense">
            <InputLabel id="gender-label">Geschlecht</InputLabel>
            <Select
              labelId="gender-label"
              label="Geschlecht" 
              value={currentEmployee.gender}
              onChange={(e) =>
                setCurrentEmployee({
                  ...currentEmployee,
                  gender:
                    typeof e.target.value === "string"
                      ? e.target.value.split(",")
                      : e.target.value,
                })
              }
              renderValue={(selected) => selected.join(", ")}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                getContentAnchorEl: null, 
              }}
            >
              <MenuItem value="Männlich">Männlich</MenuItem>
              <MenuItem value="Weiblich">Weiblich</MenuItem>
              <MenuItem value="Divers">Divers</MenuItem>
              <MenuItem value="Ich weiss es selber nicht">
                Ich weiss es selber nicht
              </MenuItem>
            </Select>
          </FormControl> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">Abbrechen</Button>
          <Button onClick={handleSave} color="primary" variant="contained">Speichern</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default App;