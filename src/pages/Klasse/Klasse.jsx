import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const Klasse = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'bezeichnung', headerName: 'Bezeichnung', width: 150 },
        { field: 'maxAnzahlSchueler', headerName: 'Max. Schüler', width: 150 },
        { field: 'jahr', headerName: 'Jahr', width: 90 },
    ];

    const rows = [
        { id: 1, bezeichnung: 'ITB 1c', maxAnzahlSchueler: 20, jahr: 1 },
        { id: 2, bezeichnung: 'ITB 1d', maxAnzahlSchueler: 22, jahr: 1 },
        { id: 3, bezeichnung: 'ITB 1a', maxAnzahlSchueler: 17, jahr: 1 },
        { id: 4, bezeichnung: 'ITB 2c', maxAnzahlSchueler: 25, jahr: 2 },
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <Typography variant="h1" component="h2">
                Klasse
            </Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    );
};

export default Klasse;
