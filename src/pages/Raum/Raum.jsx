import React, { useEffect, useState } from "react";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { toast, ToastContainer } from "react-toastify";
<<<<<<< HEAD
import { RaumService } from "./../../data/DataService.js";


const RaeumePage = () => {
    const [raeume, setRaeume] = useState(null);
    const [raumToEdit, setRaumToEdit] = useState(null);

    useEffect(() => {
        loadRaeume();
    }, []);

    useEffect(() => {
        if (raumToEdit) {
            console.log("Raum changed", raumToEdit);
        }
    }, [raumToEdit]);

    async function loadRaeume() {
        setTimeout(() => {
            setRaeume(RaumService.fetchAll());
        }, 3000);
    }

    function handleEditRaum(id) {
        let raumObj = RaumService.fetchById(id);
        if (raumObj) {
            toast.success(`Raum To Edit: ${raumObj.Bezeichnung}`);
            setRaumToEdit(raumObj);
        } else {
            toast.error('Raum wurde nicht gefunden.');
        }
    }
=======
import { RaumService } from "../../data/DataService.js";
>>>>>>> 0201656d392af4e9ccbf1ad086f111d7b0349b62

const initialData = [
    { "id": 1, "Bezeichnung": "OG 101", "Stock": 1, "EDV": true },
    { "id": 2, "Bezeichnung": "OG 202", "Stock": 2, "EDV": false },
    { "id": 3, "Bezeichnung": "OG 203", "Stock": 2, "EDV": false },
    { "id": 4, "Bezeichnung": "OG 204", "Stock": 2, "EDV": false },
    { "id": 5, "Bezeichnung": "OG 105", "Stock": 1, "EDV": true },
    { "id": 6, "Bezeichnung": "EG 006", "Stock": 0, "EDV": true },
    { "id": 7, "Bezeichnung": "EG 007", "Stock": 0, "EDV": true },
    { "id": 8, "Bezeichnung": "EG 008", "Stock": 0, "EDV": true },
    { "id": 9, "Bezeichnung": "OG 109", "Stock": 1, "EDV": false }
  ];
  
  const App = () => {
    const [data, setData] = useState(initialData);
    const [formData, setFormData] = useState({ id: '', Bezeichnung: '', Stock: 0, EDV: false });
    const [isEditing, setIsEditing] = useState(false);
  
    // Funktionen für CRUD-Operationen
    const handleAdd = () => {
      setData([...data, { ...formData, id: data.length + 1 }]);
      setFormData({ id: '', Bezeichnung: '', Stock: 0, EDV: false });
    };
  
    const handleEdit = (id) => {
      const itemToEdit = data.find(item => item.id === id);
      setFormData(itemToEdit);
      setIsEditing(true);
    };
  
    const handleUpdate = () => {
      const updatedData = data.map(item => (item.id === formData.id ? formData : item));
      setData(updatedData);
      setFormData({ id: '', Bezeichnung: '', Stock: 0, EDV: false });
      setIsEditing(false);
    };
  
    const handleDelete = (id) => {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
    };
  
    return (
      <div>
        <h1>Mock Datenverwaltung</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              {item.Bezeichnung} - Stock: {item.Stock} - EDV: {item.EDV.toString()}
              <button onClick={() => handleEdit(item.id)}>Bearbeiten</button>
              <button onClick={() => handleDelete(item.id)}>Löschen</button>
            </li>
          ))}
        </ul>
        <form onSubmit={isEditing ? handleUpdate : handleAdd}>
          <label>
            Bezeichnung:
            <input type="text" value={formData.Bezeichnung} onChange={(e) => setFormData({ ...formData, Bezeichnung: e.target.value })} />
          </label>
          <label>
            Stock:
            <input type="number" value={formData.Stock} onChange={(e) => setFormData({ ...formData, Stock: parseInt(e.target.value) })} />
          </label>
          <label>
            EDV:
            <input type="checkbox" checked={formData.EDV} onChange={(e) => setFormData({ ...formData, EDV: e.target.checked })} />
          </label>
          <button type="submit">{isEditing ? 'Aktualisieren' : 'Hinzufügen'}</button>
        </form>
      </div>
    );
  };
  
  export default App;