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
const Modul = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'bezeichnung', headerName: 'Bezeichnung', width: 150 },
        { field: 'anzahlLektionen', headerName: 'Anzahl Lektionen', width: 150 },
        {
            field: 'linkZuBaukasten',
            headerName: 'Link zum Baukasten',
            width: 200,
            renderCell: (params) => (
                <a href={params.value} target="_blank" rel="noopener noreferrer">
                    {params.value}
                </a>
            )
        },
    ];

    const rows = [
        { id: 1, bezeichnung: 'M106', anzahlLektionen: 40, linkZuBaukasten: 'https://www.modulbaukasten.ch/module/106' },
        { id: 2, bezeichnung: 'M322', anzahlLektionen: 40, linkZuBaukasten: 'https://www.modulbaukasten.ch/module/322' },
        { id: 3, bezeichnung: 'M294', anzahlLektionen: 40, linkZuBaukasten: 'https://www.modulbaukasten.ch/module/294' },
        { id: 4, bezeichnung: 'M295', anzahlLektionen: 40, linkZuBaukasten: 'https://www.modulbaukasten.ch/module/295' },
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <h1>Modul</h1>
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

export default Modul;
