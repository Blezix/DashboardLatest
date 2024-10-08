import React from 'react';
import { Paper, Typography } from '@mui/material';

export default function SavingCard() {
    return (
        <Paper sx={{ padding: 2, backgroundColor: "#a0cbf8" }}>
            <Typography variant="h6">Saving</Typography>
            <Typography variant="h4">$421.29</Typography>
            <Typography color="textSecondary">+$46.11 from last month</Typography>
        </Paper>
    );
}