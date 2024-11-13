import React, {useState} from 'react';
import {Paper, Typography, Box, Avatar, Button} from '@mui/material';
import {useThemeMode} from "../../../../ThemeModeContext";

export default function Prefrence() {
    const { mode, toggleTheme } = useThemeMode();


    return (
        <Box sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems:"center"
        }}>
            <Box sx={{}}>
                <Button variant="contained" onClick={toggleTheme}>
                    Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
                </Button>
            </Box>
        </Box>
    );
}