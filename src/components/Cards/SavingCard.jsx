import React from 'react';
import { Paper, Typography, useTheme } from '@mui/material';

export default function SavingCard() {
   const theme = useTheme();
    return (
        <Paper sx={{ padding: 2, bgcolor: theme.palette.blueAccent.main  }}>
            <Typography variant="h6">Saving</Typography>
            <Typography variant="h4">$421.29</Typography>
            <Typography color="textSecondary">+$46.11 from last month</Typography>
        </Paper>
    );
}