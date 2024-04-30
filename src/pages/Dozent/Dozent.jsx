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

const Dozent = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'WochenstundenMax', headerName: 'Wochenstunden Max', width: 150 },
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
        {id: 5, name: 'Mariejeanne Ianinotti', PLZ: 7318, WochenstundenMax: 9},
        {id: 6, name: 'Nicko Petrillo', PLZ: 4165, WochenstundenMax: 22},
        {id: 7, name: 'Almeria Rickards', PLZ: 7555, WochenstundenMax: 22},
        {id: 8, name: 'Zacharie Rapsey', PLZ: 6065, WochenstundenMax: 25},
        {id: 9, name: 'Mattie Matuszyk', PLZ: 5588, WochenstundenMax: 9},
        {id: 10, name: 'Domini Sigmund', PLZ: 5177, WochenstundenMax: 13},
        {id: 11, name: 'Karolina Darridon', PLZ: 6810, WochenstundenMax: 18},
        {id: 12, name: 'Thedric Kloss', PLZ: 6047, WochenstundenMax: 11},
        {id: 13, name: 'Lindi Cooley', PLZ: 6980, WochenstundenMax: 24},
        {id: 14, name: 'Chrisy Antonioni', PLZ: 7829, WochenstundenMax: 17},
        {id: 15, name: 'Moira Spearman', PLZ: 7490, WochenstundenMax: 8},
        {id: 16, name: 'Thebault Whyman', PLZ: 7059, WochenstundenMax: 10},
        {id: 17, name: 'Gav Sawfoot', PLZ: 7862, WochenstundenMax: 25},
        {id: 18, name: 'Kikelia Smerdon', PLZ: 5487, WochenstundenMax: 22},
        {id: 19, name: 'Faith Knightsbridge', PLZ: 6583, WochenstundenMax: 21},
        {id: 20, name: 'Karly Howsam', PLZ: 5173, WochenstundenMax: 25},
        {id: 21, name: 'Hill Willoughby', PLZ: 4016, WochenstundenMax: 9},
        {id: 22, name: 'Octavia Janjusevic', PLZ: 5503, WochenstundenMax: 16},
        {id: 23, name: 'Ester Ternent', PLZ: 6602, WochenstundenMax: 22},
        {id: 24, name: 'Floyd Yesipov', PLZ: 6994, WochenstundenMax: 23}
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <h1>Dozent Übersicht</h1>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[20]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    )
}

export default Dozent;