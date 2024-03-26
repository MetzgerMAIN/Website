import React, {useEffect, useState} from "react";
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {SchuelerDataService} from "../../data/DataService";
import EditIcon from '@mui/icons-material/Edit';
import {toast, ToastContainer} from "react-toastify";

const DemoPage = () => {
    const [schueler, setSchueler] = useState(null);
    const [schuelerToEdit, setSchuelerToEdit] = useState(null);

    // Wird immer beim Laden der Component ausgeführt
    useEffect(() => {
        loadSchueler();
    }, []); // Dependency Array ist leer

    // Wird bei jeder Änderung von State "schuelerToEdit" ausgeführt
    useEffect(() => {
        console.log("schueler changed")
    }, [schuelerToEdit]) // Dependency Array zeigt Abhängigkeit von schuelerToEdit

    /**
     * Loads Schueler Collection and sets the state schueler
     * @returns {Promise<void>}
     */
    async function loadSchueler() {
        setTimeout(() => {
            setSchueler(SchuelerDataService.fetchAll());
        }, 3000)
    }

    console.log("Rendering Component Demo")

    function handleEditSchueler(id) {
        let schuelerObj = SchuelerDataService.fetchById(id)
        toast.success(`Schueler To Edit: ${schuelerObj.Name}`)
        setSchuelerToEdit(schuelerObj);
    }

    return (
        <>
            <h1>Demo</h1>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Geburtsdatum</TableCell>
                            <TableCell>PLZ</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            schueler == null ? <TableRow><TableCell>Loading</TableCell></TableRow>
                                : schueler.map((item, index) => (
                                    <TableRow hover key={item.Id}>
                                        <TableCell>{item.Id}</TableCell>
                                        <TableCell>{item.Name}</TableCell>
                                        <TableCell>{item.Geburtsdatum}</TableCell>
                                        <TableCell>{item.PLZ}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => handleEditSchueler(item.Id)}>
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default DemoPage;