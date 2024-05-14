import React, { useEffect, useState } from "react";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { toast, ToastContainer } from "react-toastify";
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

    return (
        <>
            <h1>Räume Verwaltung</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Bezeichnung</TableCell>
                            <TableCell>Stock</TableCell>
                            <TableCell>EDV</TableCell>
                            <TableCell>Aktionen</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            raeume === null ? 
                            <TableRow>
                                <TableCell colSpan={4} align="center">Lädt...</TableCell>
                            </TableRow>
                            : raeume.map((raum) => (
                                <TableRow hover key={raum.Id}>
                                    <TableCell>{raum.Bezeichnung}</TableCell>
                                    <TableCell>{raum.Stock}</TableCell>
                                    <TableCell>{raum.EDV.toString()}</TableCell> {/* Konvertierung des Booleschen Wertes zu einem String */}
                                    <TableCell>
                                        <IconButton onClick={() => handleEditRaum(raum.Id)}>
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <ToastContainer />
        </>
    );
}

export default RaeumePage;
