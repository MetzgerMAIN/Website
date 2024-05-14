import React, {useEffect, useState} from "react";
import {useKeycloak} from "@react-keycloak/web";
import {
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField
} from "@mui/material";
import DeleteOutlined from '@mui/icons-material/DeleteOutline'
import EditIcon from '@mui/icons-material/Edit';
import {SchuelerService} from "../../data/DataService";
import JsonView from "@uiw/react-json-view";
import {toast} from "react-toastify";
import {key} from "localforage";
import schueler from "../Schueler/Schueler";

const DemoPage = () => {
    const {keycloak, initialized} = useKeycloak();
    const [schuelerData, setSchuelerData] = useState(null);
    const [schuelerEditData, setSchuelerEditData] = useState({
        id: 0,
        Name: "",
        Geburtsdatum: "",
        PLZ: ""
    })


    useEffect(() => {
        getSchueler().then(() => toast("Fetched Schueler", {type: "success"}));
    }, []);

    async function getSchueler() {
        SchuelerService.getAll().then(data => setSchuelerData(data))
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

    function handleDeleteSchueler(id) {
        toast(`Schueler ${id} requested for deletion`, {type: "info"})
        SchuelerService.delete(id).then(() => getSchueler());
    }

    function handleFormChange(key, value) {
        setSchuelerEditData({
            ...schuelerEditData,
            [key]: value
        })
    }

    function handleFormSave() {
        if (schuelerEditData.Name && schuelerEditData.Geburtsdatum && schuelerEditData.PLZ) {
            if(schuelerEditData.id)
            {
                SchuelerService.put(schuelerEditData.id, schuelerEditData).then(() => {
                    getSchueler();
                    toast("Schueler updated successfully", {type: "success"});
                    setSchuelerEditData({
                        id: 0,
                        Name: "",
                        Geburtsdatum: "",
                        PLZ: ""
                    })
                }).catch((error) => toast("Could not update Schueler: " + error.message, {type: "error"}))
            }
            else {
                SchuelerService.post(schuelerEditData).then(() => {
                    getSchueler();
                    toast("Schueler inserted successfully", {type: "success"});
                    setSchuelerEditData({
                        id: 0,
                        Name: "",
                        Geburtsdatum: "",
                        PLZ: ""
                    })
                }).catch((error) => toast("Could not insert Schueler: " + error.message, {type: "error"}));
            }
        }
    }

    function handleEditSchueler(id) {
        SchuelerService.get(id).then(data => setSchuelerEditData(data));
    }

    return (
        <>
            <h1>Demo Keycloak</h1>
            <Button variant="contained" color="primary" onClick={handleButtonClick}>{buttonText}</Button>
            <p>Is Keycloak Authenticated: <b>{keycloak.authenticated.toString()}</b></p>

            <div style={{marginBlock: ".5em", padding: "2em", border: "solid 1px gray", borderRadius: "5px"}}>
                <TextField label="Name" value={schuelerEditData.Name}
                           onChange={(event) => handleFormChange("Name", event.target.value)}
                           variant="outlined" size={"small"}/>
                <TextField label="Geburtsdatum" value={schuelerEditData.Geburtsdatum}
                           onChange={(event) => handleFormChange("Geburtsdatum", event.target.value)}
                           variant="outlined" size={"small"}/>
                <TextField label="PLZ" value={schuelerEditData.PLZ}
                           onChange={(event) => handleFormChange("PLZ", event.target.value)}
                           variant="outlined" size={"small"}/>
                <Button variant={"contained"} color={"success"} onClick={handleFormSave}>Speichern</Button>
                <JsonView value={schuelerEditData}/>
            </div>

            {
                schuelerData && (
                    <TableContainer component={Paper}>
                        <Table size={"small"}>
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
                                {schuelerData.map((schueler) => (
                                    <TableRow key={schueler.id}>
                                        <TableCell>{schueler.id}</TableCell>
                                        <TableCell>{schueler.Name}</TableCell>
                                        <TableCell>{schueler.Geburtsdatum}</TableCell>
                                        <TableCell>{schueler.PLZ}</TableCell>
                                        <TableCell>
                                            <IconButton color={"error"} onClick={() => handleDeleteSchueler(schueler.id)}>
                                                <DeleteOutlined/>
                                            </IconButton>
                                            <IconButton color={"primary"} onClick={() => handleEditSchueler(schueler.id)}>
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

export default DemoPage;